import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BooksListPage = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    async function getAllBooks() {
      try {
        const response = await axios.get("http://localhost:5005/books");
        console.log("response: ", response);
        // in the google json file the data is stored inside items
        setAllBooks(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    //to work you have to call getAllbooks() !!!!!!!!!!!
    getAllBooks();
  }, []);


  return (
    <div className="all-books">
    {allBooks.map((oneBook) => {
      return (
        <div key={oneBook.id} className="book-card">
          <article>
            <Link to={`/books/${oneBook.id}`}>
              console.log("bookId is :", {oneBook.id})
              <img src={oneBook.volumeInfo.imageLinks.smallThumbnail} alt={oneBook.volumeInfo.description} />
            </Link>
            <h2>{oneBook.volumeInfo.title}</h2>
            <p>{oneBook.volumeInfo.authors}</p>
          </article>
        </div>
      );
    })}
  </div>
  );
};

export default BooksListPage;
