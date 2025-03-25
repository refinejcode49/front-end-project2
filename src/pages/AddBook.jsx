import React, { useState } from "react";
import "../App.css";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [addedBy, setAddedBy] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      title,
      authors,
      category,
      description,
      imageURL,
      addedBy,
    };
    console.log("New Book:", newBook);
    
  };

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

        <label htmlFor="category">Category of the book</label>
        <input
          type="text"
          id="category"
          name="category"
          placeholder="Category of the book"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
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
