import React from "react";
import BooksList from "../BooksList/BooksList";

const HomePage = () => {
  const books = [
    {
      id: 1,
      title: "You dont know JS!",
      author: "J.Simmons",
    },
    {
      id: 2,
      title: "Process",
      author: "F.Kafka",
    },
  ];
  return <BooksList books={books} />;
};

export default HomePage;
