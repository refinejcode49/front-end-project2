import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const BookDetailsPage = () => {
  const [book, setBook] = useState(null);
  const { bookId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5005/books/${bookId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("here is one book", data);
        setBook(data);
      })
      .catch((error) => console.log("the error is:", error));
  }, [bookId]);

  function handleDelete() {
    axios
      .delete(`http://localhost:5005/books/${bookId}`)
      .then((res) => {
        console.log("book deleted", res.data);
        alert("Book deleted successfully!");
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-details-container">
      <img
        src={book.volumeInfo?.imageLinks?.thumbnail || "placeholder.jpg"}
        alt={book.volumeInfo?.title || "No Title Available"}
      />
      <h2>{book.volumeInfo?.title || "No Title Available"}</h2>
      <p className="authors">
        Author: {book.volumeInfo?.authors?.join(", ") || "Unknown Author"}
      </p>
      <p className="description">
        {book.volumeInfo?.description || "No description available."}
      </p>
      <div className="buttons">
        <Link to="/" className="back-btn">
          <button>Back</button>
        </Link>
        <button className="favorite-btn">Favorite</button>
        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookDetailsPage;
