import React, { useState, useEffect } from "react";
import axios from "axios";

const Booklist = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // searchQuery is the state variable that stores the search query

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
      );
      setBooks(response.data.items);
    } catch (error) {
      console.error("Error fetching books", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [searchQuery]);
gi
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

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
            <p> Author: {book?.volumeInfo?.authors?.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
