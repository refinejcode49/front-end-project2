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
    <div className="form">
      <form>
        <label>Title of the book</label>
        <input type="text" name="title" placeholder="Title of the book"
        value={title}
        onChange={handleTitle}
        />
        <label>Author(s) of the book</label>
        <input type="text" name="authors" placeholder="Author(s) of the book"
        value={authors}
        onChange={handleAuthors}
        />
        <label>Categories of the book</label>
        <input type="text" name="categories" placeholder="Categories of the book"
        value={categories}
        onChange={handleCategories}
        />
        <label>Description of the book</label>
        <input type="text" name="description" placeholder="Description of the book"
        value={description}
        onChange={handleDescription}
        />
        <label>Image of the book</label>
        <input type="text" name="imageURL" placeholder="Image URL of the book"
        value={imageURL}
        onChange={handleImageUrl}
        />
        <label>Added by</label>
        <input type="text" name="addedBy" placeholder="Added by"
        value={addedBy}
        onChange={handleAddedBy}
        />
        <button className="form-btn" onClick={handleSubmit}>Add Book</button>
      </form>
    </div>
  )
}

export default AddBook