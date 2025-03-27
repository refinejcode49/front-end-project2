import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../config/apiConfig';

const AddBook = ({ addBookToBookList, closeForm }) => {
  // pass props to the addBookToBookList function and closeForm() 
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState("");
  const [categories, setCategories] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [addedBy, setAddedBy] = useState("");


  function handleSubmit(event) {
  event.preventDefault();
  const newBook = {
    volumeInfo: {
      title: title,
      authors: authors.split(",").map((author) => author.trim()),
      categories: categories,
      description: description,
      imageLinks: {
        smallThumbnail: imageURL,
      },
    },
    addedBy: addedBy,
  }
  axios
  .post(`${API_URL}/books/`, newBook)
  .then((response) =>{
    console.log("new book added!", response.data)
    alert("Book added successfully!");
    addBookToBookList(response.data); // add new Book to the bookList
    closeForm(); // close the form after submitting
  })
  .catch((error)=> console.log(error))
  .finally(() => {
    setTitle("");
    setAuthors("");
    setCategories("");
    setDescription("");
    setImageURL("");
    setAddedBy("");
  });

}

  return (
    <div className="add-book-container">
      <h2>Add New Book</h2>
      <form className="add-book-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title of the book</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title of the book"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="authors">Author(s) of the book</label>
        <input
          type="text"
          id="authors"
          name="authors"
          placeholder="Author(s) of the book"
          value={authors}
          onChange={(e) => setAuthors(e.target.value)}
        />
        <label>Categories of the book</label>
        <input type="text" name="categories" placeholder="Categories of the book"
        value={categories}
        onChange={(e) => setCategories(e.target.value)}
        />

        <label htmlFor="description">Description of the book</label>
        <textarea
          id="description"
          name="description"
          placeholder="Description of the book"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <label htmlFor="imageURL">Image URL of the book</label>
        <input
          type="text"
          id="imageURL"
          name="imageURL"
          placeholder="Image URL of the book"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />

        <label htmlFor="addedBy">Added by</label>
        <input
          type="text"
          id="addedBy"
          name="addedBy"
          placeholder="Added by"
          value={addedBy}
          onChange={(e) => setAddedBy(e.target.value)}
        />

        <button type="submit" className="form-btn">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
