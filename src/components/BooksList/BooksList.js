import React from "react";
import { connect } from "react-redux";
import "./BooksList.css";
import BookItem from "../BookItem/BookItem";
import WithBookstoreService from "../hoc/WithBookstoreService";
import { fetchBooks } from "../../actions/actions";
import Loader from "../Loader/Loader";
import ErrorIndicator from "../error-indicator/ErrorIndicator";

const BooksList = (props) => {
  const { books, loading, error } = props;
  console.log(props);
  React.useEffect(() => {
    props.fetchBooks();
  }, []);

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorIndicator />}

      {!loading && !error && (
        <ul className="books-list">
          {books.map((book) => (
            <BookItem key={book.id} book={book} />
          ))}
        </ul>
      )}
    </>
  );
};

/* class BooksList extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error } = this.props;
    if (loading) {
      return <Loader />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <ul className="books-list">
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </ul>
    );
  }
} */

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(dispatch, bookstoreService),
  };
};

export default WithBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BooksList));
