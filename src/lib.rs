/// The last `n` items of `items` (all of them when there are fewer than `n`).
pub fn last_n<T: Clone>(items: &[T], n: usize) -> Vec<T> {
    items[items.len() - n..].to_vec()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn takes_the_tail() {
        assert_eq!(last_n(&[1, 2, 3, 4], 2), vec![3, 4]);
    }
}
