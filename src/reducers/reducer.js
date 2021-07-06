const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  totalPrice: 400,
};

const reducer = (state = initialState, action) => {
  console.log(action.type);
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

      const newBookItem = {
        id: book.id,
        name: book.title,
        count: 1,
        price: book.price,
        total: book.price,
      };

      return {
        ...state,
        cartItems: [...state.cartItems, newBookItem],
      };
    default:
      return state;
  }
};

export default reducer;
