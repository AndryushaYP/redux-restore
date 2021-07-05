import React from "react";
import { BookstoreServiceConsumer } from "../bookstore-service-context/bookstore-service-context";

const WithBookstoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {(bookstorService) => {
          return <Wrapped {...props} bookstorService={bookstorService} />;
        }}
      </BookstoreServiceConsumer>
    );
  };
};

export default WithBookstoreService;
