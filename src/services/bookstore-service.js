export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "You dont know JS!",
      author: "K.Simmons",
      price: 145,
      url: "https://images-na.ssl-images-amazon.com/images/I/41kn-mEpe6L._SX331_BO1,204,203,200_.jpg",
    },
    {
      id: 2,
      title: "Process",
      author: "F.Kafka",
      price: 150,
      url: "https://images-na.ssl-images-amazon.com/images/I/51dWQDFxgDL._SX323_BO1,204,203,200_.jpg",
    },
  ];
  getBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data);
      }, 700);
    });
  }
}
