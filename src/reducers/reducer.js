const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  totalPrice: 0,
};

const updateCartItems = (cartItems, item, id) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, id), ...cartItems.slice(id + 1)];
  }
  if (id === -1) {
    return [...cartItems, item];
  }
  return [...cartItems.slice(0, id), item, ...cartItems.slice(id + 1)];
};

const updateItem = (item = {}, book, quantity) => {
  const { id = book.id, title = book.title, count = 0, price = book.price, total = 0 } = item;
  return {
    id,
    title,
    price,
    count: count + quantity,
    total: total + quantity * price,
  };
};

const updateOrder = (state, id, quantity) => {
  const { books, cartItems } = state;
  const bookId = id;
  const book = books.find((item) => item.id === bookId);
  const findIdx = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[findIdx];
  const newItem = updateItem(item, book, quantity);

  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, findIdx),
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS_SUCCESS":
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };

    case "FETCH_BOOKS_REQUEST":
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };

    case "FETCH_BOOKS_FAILURE":
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload,
      };

    case "BOOK_ADDED_TO_CART":
      return updateOrder(state, action.payload, 1);

    case "BOOK_REMOVED_FROM_CART":
      return updateOrder(state, action.payload, -1);

    case "ALL_BOOKS_REMOVED_FROM_CART":
      const book = state.cartItems.find((item) => item.id === action.payload);
      return updateOrder(state, action.payload, -book.count);

    default:
      return state;
  }
};

export default reducer;
