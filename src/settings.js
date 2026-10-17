/**
 * Parses a dashboard's settings. Settings are written as a JavaScript
 * object literal, so they can use expressions such as `60 * 1000`.
 * The text is parsed, never evaluated: only object and array literals,
 * strings, numbers, true/false/null and + - * / % arithmetic are allowed.
 */
export function parseSettings(text) {
  const src = String(text);
  let pos = 0;

  const WS = /(?:\s|\/\/[^\n]*|\/\*[\s\S]*?\*\/)*/y;
  const NUMBER = /0[xX][0-9a-fA-F]+|(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/y;
  const IDENT = /[A-Za-z_$][\w$]*/y;
  const ESCAPES = { n: "\n", t: "\t", r: "\r", b: "\b", f: "\f", v: "\v", 0: "\0" };

  const fail = (msg) => {
    throw new SyntaxError(`settings: ${msg} at position ${pos}`);
  };
  const peek = () => {
    WS.lastIndex = pos;
    WS.exec(src);
    pos = WS.lastIndex;
    return src[pos];
  };
  const eat = (ch) => {
    if (peek() !== ch) fail(`expected "${ch}"`);
    pos++;
  };
  const match = (re) => {
    peek();
    re.lastIndex = pos;
    const m = re.exec(src);
    if (!m) return null;
    pos = re.lastIndex;
    return m[0];
  };

  function string() {
    const quote = src[pos++];
    let out = "";
    while (pos < src.length && src[pos] !== quote) {
      let ch = src[pos++];
      if (ch === "\n") fail("unterminated string");
      if (ch === "\\") {
        ch = src[pos++];
        if (ch === undefined) fail("unterminated string");
        if (ch === "u") {
          const hex = src.slice(pos, pos + 4);
          if (!/^[0-9a-fA-F]{4}$/.test(hex)) fail("bad unicode escape");
          ch = String.fromCharCode(parseInt(hex, 16));
          pos += 4;
        } else if (Object.hasOwn(ESCAPES, ch)) {
          ch = ESCAPES[ch];
        }
      }
      out += ch;
    }
    if (pos >= src.length) fail("unterminated string");
    pos++;
    return out;
  }

  function object() {
    eat("{");
    const obj = {};
    while (peek() !== "}") {
      const ch = peek();
      let key;
      if (ch === '"' || ch === "'") key = string();
      else key = match(IDENT) ?? match(NUMBER);
      if (key === null) fail("expected property name");
      if (ch !== '"' && ch !== "'" && /^[\d.]/.test(key)) key = String(Number(key));
      eat(":");
      // defineProperty so a "__proto__" key stays an ordinary own property.
      Object.defineProperty(obj, key, { value: expr(), enumerable: true, writable: true, configurable: true });
      if (peek() !== ",") break;
      pos++;
    }
    eat("}");
    return obj;
  }

  function array() {
    eat("[");
    const arr = [];
    while (peek() !== "]") {
      arr.push(expr());
      if (peek() !== ",") break;
      pos++;
    }
    eat("]");
    return arr;
  }

  function primary() {
    const ch = peek();
    if (ch === "{") return object();
    if (ch === "[") return array();
    if (ch === '"' || ch === "'") return string();
    if (ch === "(") {
      pos++;
      const v = expr();
      eat(")");
      return v;
    }
    const num = match(NUMBER);
    if (num !== null) return Number(num);
    const word = match(IDENT);
    if (word === "true") return true;
    if (word === "false") return false;
    if (word === "null") return null;
    return fail(word ? `unexpected identifier "${word}"` : "unexpected input");
  }

  function unary() {
    const ch = peek();
    if (ch === "-" || ch === "+") {
      pos++;
      const v = unary();
      return ch === "-" ? -v : +v;
    }
    return primary();
  }

  function term() {
    let v = unary();
    for (let op = peek(); op === "*" || op === "/" || op === "%"; op = peek()) {
      pos++;
      const r = unary();
      v = op === "*" ? v * r : op === "/" ? v / r : v % r;
    }
    return v;
  }

  function expr() {
    let v = term();
    for (let op = peek(); op === "+" || op === "-"; op = peek()) {
      pos++;
      const r = term();
      v = op === "+" ? v + r : v - r;
    }
    return v;
  }

  const result = expr();
  if (peek() !== undefined) fail("unexpected trailing input");
  return result;
}

/** PUT /dashboards/:id/settings: any signed-in user may update a dashboard's settings. */
export async function handleUpdateSettings(req, res, store) {
  let body = "";
  for await (const chunk of req) body += chunk;
  const settings = parseSettings(body);
  await store.saveSettings(req.params.id, settings);
  res.writeHead(204).end();
}
