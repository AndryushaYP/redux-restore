import React from "react";
import "./BookItem.css";

const BookItem = ({ book }) => {
  const { title, author } = book;
  return (
    <li>
      <span>{title}</span>
      <span>{author}</span>
    </li>
  );
};

export default BookItem;
