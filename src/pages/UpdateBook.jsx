import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL } from '../config/apiConfig';
import axios from "axios";

const UpdateBook = () => {
  const { bookId } = useParams(); // Get the bookId from the URL
  const navigate = useNavigate(); // Hook to navigate programmatically

  const [book, setBook] = useState(null); // State to store the book details
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  // Fetch the book details when the component mounts
  useEffect(() => {
    axios
      .get(`${API_URL}/books/${bookId}`)
      .then((response) => {
        const bookData = response.data;
        setBook(bookData);
        setTitle(bookData.volumeInfo?.title || "");
        setAuthors(bookData.volumeInfo?.authors?.join(", ") || "");
        setDescription(bookData.volumeInfo?.description || "");
        setThumbnail(bookData.volumeInfo?.imageLinks?.thumbnail || "");
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
        alert("Failed to fetch book details. Please try again.");
      });
  }, [bookId]);

  // Handle form submission to update the book
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted !")

    const updatedBook = {
      ...book,
      volumeInfo: {
        ...book.volumeInfo,
        title: title || book.volumeInfo?.title, 
        authors: authors
        ? authors.split(",").map((author) => author.trim())
        : book.volumeInfo?.authors,
        description: description || book.volumeInfo?.description,
        imageLinks: {
          ...book.volumeInfo?.imageLinks,
          thumbnail: thumbnail || book.volumeInfo?.imageLinks?.thumbnail
        },
      },
    };


  console.log("Updated Book Data:", updatedBook);

    axios
      .put(`${API_URL}/books/${bookId}`, updatedBook)
      .then((response) => {
        console.log("Book updated successfully:", response.data);
        alert("Book updated successfully!");
        navigate(`/books/${bookId}`); // Redirect to the book details page
      })
      .catch((error) => {
        console.error("Error updating book:", error);
        alert("Failed to update the book. Please try again.");
      });
  };

  if (!book) {
    return <div>Loading book details...</div>;
  }

  return (
    <div className="update-book-container">
      <h2>Update Book</h2>
      <form className="update-book-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="authors">Authors (comma-separated)</label>
        <input
          type="text"
          id="authors"
          value={authors}
          onChange={(e) => setAuthors(e.target.value)}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <label htmlFor="thumbnail">Thumbnail URL</label>
        <input
          type="text"
          id="thumbnail"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />

        <button type="submit" className="form-btn" onSubmit={handleSubmit}>
          Update Book
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
