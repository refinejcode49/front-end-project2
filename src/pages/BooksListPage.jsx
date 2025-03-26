import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bookImagePlaceholder from "../assets/book-image-placeholder.png"

const BooksListPage = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    async function getAllBooks() {
      try {
        const response = await axios.get("http://localhost:5005/books");
        console.log("response: ", response);
        setAllBooks(response.data); 
      } catch (error) {
        console.log(error);
      }
    }
    getAllBooks();
  }, []);

  return (
    <div className="page-container">
      <Link to="/new-book">
        <button className="add-btn">ADD BOOK</button>
      </Link>
      <div className="all-books">
        {allBooks.map((oneBook) => (
          <div key={oneBook.id} className="book-card">
            <article>
              <Link to={`/books/${oneBook.id}`}>
                <img
                  src={
                    oneBook.volumeInfo?.imageLinks?.smallThumbnail ||
                    bookImagePlaceholder
                  }
                  alt={
                    oneBook.volumeInfo?.description ||
                    "No description available"
                  }
                />
                </Link>
                <h2>{oneBook.volumeInfo?.title || "no title available"}</h2>
                <p>{oneBook.volumeInfo?.authors || "no authors available"}</p>
              </article>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default BooksListPage;

