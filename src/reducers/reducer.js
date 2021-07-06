import updateBookList from "./bookList";
import { updateShopingCart } from "./shopingCart";

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shopingCart: updateShopingCart(state, action),
  };
};

export default reducer;
