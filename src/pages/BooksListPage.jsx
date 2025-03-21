import React, { useState, useEffect } from "react";
import axios from "axios";

const BookListPage = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBooks = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
      );
      setBooks(response.data?.items || []);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      fetchBooks();
    }
  }, [searchQuery]);

  const clearSearch = () => {
    setSearchQuery("");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={clearSearch}>Clear</button>
      {books.length === 0 && searchQuery !== "" && <div>No books found.</div>}
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book?.volumeInfo?.imageLinks?.thumbnail && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
                style={{ width: "100px" }}
              />
            )}
            <h3>{book?.volumeInfo?.title}</h3>
            <p>Author: {book?.volumeInfo?.authors?.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookListPage;
