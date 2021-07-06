const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  totalPrice: 0,
};

const updateCartItems = (cartItems, item, id) => {
  if (id === -1) {
    return [...cartItems, item];
  }
  return [...cartItems.slice(0, id), item, ...cartItems.slice(id + 1)];
};

const updateItem = (item = {}, book) => {
  const { id = book.id, title = book.title, count = 0, price = book.price, total = 0 } = item;
  console.log(title);
  return {
    id,
    title,
    price,
    count: count + 1,
    total: total + price,
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
      const bookId = action.payload;
      const book = state.books.find((item) => item.id === bookId);
      const findIdx = state.cartItems.findIndex(({ id }) => id === bookId);
      const item = state.cartItems[findIdx];

      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, updateItem(item, book), findIdx),
      };

    default:
      return state;
  }
};

export default reducer;
