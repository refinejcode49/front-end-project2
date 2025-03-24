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
        setAllBooks(response.data.items);
      } catch (error) {
        console.log(error);
      }
    }
    //to work you have to call getAllbooks() !!!!!!!!!!!
    getAllBooks();
  }, []);

  return (
    <div className="all-books">
      {allBooks.map((book) => {
        return (
          <div key={book.id} className="book-card">
            <article>
              <Link to={`/books/${book.Id}`}>
                <img
                  src={book.volumeInfo.imageLinks.smallThumbnail}
                  alt={book.volumeInfo.description}
                />
              </Link>
              <h2>{book.volumeInfo.title}</h2>
              <p>{book.volumeInfo.authors}</p>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default BooksListPage;
