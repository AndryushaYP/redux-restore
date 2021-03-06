import React from "react";
import { connect } from "react-redux";
import "./BooksList.css";
import BookItem from "../BookItem/BookItem";
import WithBookstoreService from "../hoc/WithBookstoreService";
import { fetchBooks, bookAddedToCart } from "../../actions/actions";
import Loader from "../Loader/Loader";
import ErrorIndicator from "../error-indicator/ErrorIndicator";

const BooksList = ({ books, onAddedToCart }) => {
  return (
    <ul className="books-list">
      {books.map((book, id) => (
        <BookItem key={id} book={book} onAddedToCart={() => onAddedToCart(book.id)} />
      ))}
    </ul>
  );
};

const BooksListContainer = ({ books, loading, error, onAddedToCart, fetchBooks }) => {
  React.useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorIndicator />}
      {!loading && !error && <BooksList books={books} onAddedToCart={onAddedToCart} />}
    </>
  );
};

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(dispatch, bookstoreService),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
  };
};

export default WithBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BooksListContainer)
);
