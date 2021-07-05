import React from "react";
import "./BooksList.css";
import BookItem from "../BookItem/BookItem";

const BooksList = ({ books }) => {
  return (
    <ul>
      {books.map((item) => (
        <BookItem key={item.id} book={item} />
      ))}
    </ul>
  );
};

export default BooksList;
