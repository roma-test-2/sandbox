export const pageCount = (totalItems, pageSize) => Math.ceil(totalItems / pageSize);

export const pageSlice = (items, page, pageSize) => items.slice((page - 1) * pageSize, page * pageSize);
