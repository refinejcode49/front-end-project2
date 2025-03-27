import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import bookImagePlaceholder from "../assets/book-image-placeholder.png"
import { API_URL } from "../config/apiConfig";

const BookDetailsPage = () => {
  const [book, setBook] = useState(null);
  const { bookId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_URL}/books/${bookId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("here is one book", data);
        setBook(data);
      })
      .catch((error) => console.log("the error is:", error));
  }, [bookId]);

  function handleDelete() {
    axios
      .delete(`${API_URL}/books/${bookId}`)
      .then((res) => {
        console.log("book deleted", res.data);
        alert("Book deleted successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to delete the book. Please try again.");
      });
  }

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-details-container">
      <img
        src={book.volumeInfo?.imageLinks?.smallThumbnail || bookImagePlaceholder}
        alt={book.volumeInfo?.title || "No Title Available"}
      />
      <h2>{book.volumeInfo?.title || "No Title Available"}</h2>
      <p className="authors">
        <span className="span-style">Authors</span> : 
        {/*check to see if book.volumeInfo?.authors is an array*/}
            {Array.isArray(book.volumeInfo?.authors)
          //if it is, display the authors separeted by a comma
            ? book.volumeInfo.authors.join(", ")
            // if not array, display unknow author or as is
            : book.volumeInfo?.authors || "Unknown Author"}
      </p>
      <p className="book-publishedDate">
        <span>Published date</span> : 
        {book.volumeInfo?.publishedDate || "no published date available"}
        </p>

      <p className="description">
        <span className="span-style">Description</span> :  
        {book.volumeInfo?.description || "No description available."}
      </p>
      
      <div className="buttons">
        <Link to="/" className="back-btn">
          <button>Back</button>
        </Link>
        <Link to={`/edit-book/${bookId}`} className="edit-btn">
          <button>Edit Book</button>
        </Link>
        <button className="delete-btn" onClick={handleDelete}>
          Delete Book
        </button>
      </div>
    </div>
  );
};
