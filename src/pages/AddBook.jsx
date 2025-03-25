import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState("");
  const [categories, setCategories] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [addedBy, setAddedBy] = useState("");

  const handleTitle = (e) => setTitle(e.target.value);
  const handleAuthors = (e) => setAuthors(e.target.value);
  const handleCategories = (e) => setCategories(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleImageUrl = (e) => setImageURL(e.target.value);
  const handleAddedBy = (e) => setAddedBy(e.target.value);


  function handleSubmit(event) {
  event.preventDefault();
  const newBook = {
    title: title,
    authors: authors,
    categories: categories,
    description: description,
    thumbnail: imageURL,
    addedBy: addedBy,
  }
  axios
  .post("http://localhost:5005/books/", newBook)
  .then((response) =>{
    console.log("new book added!", response.data)
    navigate("/");
  })
  .catch((error)=> console.log(error))
  .finally(() => {
    setTitle("");
    setAuthors("");
    setCategories("");
    setDescription("");
    setThumbnail("");
    setAddedBy("");
  });

}

  const navigate = useNavigate()

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
        onChange={handleCategories}
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
