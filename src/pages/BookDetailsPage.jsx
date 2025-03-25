import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BookDetailsPage = () => {
  const [book, setBook] = useState(null);
  const { bookId } = useParams();

  useEffect(() => {
    async function fetchBookDetails() {
      try {
        const response = await axios.get(
          `http://localhost:5005/books/${bookId}`
        );
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    }
    fetchBookDetails();
  }, [bookId]);

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
        <Link to="/">
          <button className="back-btn">Back</button>
        </Link>
        <button className="favorite-btn">Favorite</button>
      </div>
    </div>
  );
};

export default BookDetailsPage;
