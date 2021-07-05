import React from "react";
import "./BookItem.css";

const BookItem = ({ book }) => {
  const { title, author, price, url } = book;
  return (
    <li className="book-item">
      <div className="book-item__cover">
        <img src={url} alt="обложка книги" />
      </div>
      <div className="book-item__info">
        <h2 className="book-item__title">{title}</h2>
        <p className="book-item__author">{author}</p>
        <p className="book-item__price">{price}$</p>
        <button className="btn btn-info book-item__button book-item__button_add-to-cart">
          Add to cart
        </button>
      </div>
    </li>
  );
};

export default BookItem;
