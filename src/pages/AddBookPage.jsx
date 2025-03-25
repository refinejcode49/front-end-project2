import React, { useState } from "react";
import "./App.css"; // Ensure the styles are saved in App.css

const AddBookPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    imageUrl: "",
    addedBy: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form className="add-book-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title of the book</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title of the book"
          value={formData.title}
          onChange={handleChange}
        />

        <label htmlFor="author">Author(s) of the book</label>
        <input
          type="text"
          id="author"
          name="author"
          placeholder="Author(s) of the book"
          value={formData.author}
          onChange={handleChange}
        />

        <label htmlFor="category">Category of the book</label>
        <input
          type="text"
          id="category"
          name="category"
          placeholder="Category of the book"
          value={formData.category}
          onChange={handleChange}
        />

        <label htmlFor="description">Description of the book</label>
        <textarea
          id="description"
          name="description"
          placeholder="Description of the book"
          rows="4"
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="imageUrl">Image URL of the book</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          placeholder="Image URL of the book"
          value={formData.imageUrl}
          onChange={handleChange}
        />

        <label htmlFor="addedBy">Added by</label>
        <input
          type="text"
          id="addedBy"
          name="addedBy"
          placeholder="Added by"
          value={formData.addedBy}
          onChange={handleChange}
        />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookPage;
