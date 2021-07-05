import React, { Component } from "react";
import { connect } from "react-redux";
import "./BooksList.css";
import BookItem from "../BookItem/BookItem";
import WithBookstoreService from "../hoc/WithBookstoreService";
import { booksLoaded } from "../../actions/actions";

class BooksList extends Component {
  componentDidMount() {
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();

    this.props.booksLoaded(data);
  }

  render() {
    const { books } = this.props;
    console.log(this.props);
    return (
      <ul>
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = ({ books }) => {
  return { books };
};

const mapDispatchToProps = {
  booksLoaded,
};

export default WithBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BooksList));
