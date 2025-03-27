import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bookImagePlaceholder from "../assets/book-image-placeholder.png"
import AddBook from "./AddBook";
import { API_URL } from "../config/apiConfig";

const BooksListPage = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [showAddBookForm, setShowAddBookForm] = useState(false);

  useEffect(() => {
    async function getAllBooks() {
      try {
        const response = await axios.get(`${API_URL}/books`);
        console.log("response: ", response);
        setAllBooks(response.data); 
      } catch (error) {
        console.log(error);
      }
    }
    getAllBooks();
  }, []);

  function addBookToBookList(newBook) {
    setAllBooks((prevBooks) => [...prevBooks, newBook])
  }

  console.log("All Books:", allBooks);
  
  return (
    <div className="page-container">
      {/* Toggle the AddBook form */}
      <button
        className="add-btn"
        onClick={() => setShowAddBookForm(true)} // Show the form when clicked
      >
        ADD BOOK
      </button>

      {/* Render the AddBook form */}
      {showAddBookForm && (
        <div className="add-book-modal">
          <AddBook
            addBookToBookList={addBookToBookList}
            closeForm={() => setShowAddBookForm(false)} // Pass a function to close the form
          />
        </div>
      )}

      {/* Past addBook Button <Link to="/new-book">
        <button className="add-btn">ADD BOOK</button>
      </Link>*/}
      <div className="all-books">
        {allBooks.map((oneBook) => (
          <div key={oneBook.id} className="book-card">
            <article>
              <div className="book-content">
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
                <div className="hover-frame">
                <h2 className="book-title">Title: {oneBook.volumeInfo?.title || "no title available"}</h2>
                <p className="book-authors">Authors: {oneBook.volumeInfo?.authors || "no authors available"}</p>
                <p className="book-publishedDate">Published date : {oneBook.volumeInfo?.publishedDate || "no published date available"}</p>
                <p className="book-categories">Book Category : {oneBook.volumeInfo?.categories || "no categories available"}</p>
                </div>
                
              </Link>
              </div>
              </article>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default BooksListPage;