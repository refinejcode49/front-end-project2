import React, { useState } from 'react'

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [addedBy, setAddedBy] = useState("");

  const handleTitle = (e) => setTitle(e.target.value);
  const handleAuthors = (e) => setAuthors(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleImageUrl = (e) => setImageURL(e.target.value);
  const handleAddedBy = (e) => setAddedBy(e.target.value);


function handleSubmit(event) {
  event.preventDefault();
  const newBook = {
    title,
    authors,
    category,
    description,
    imageURL,
    addedBy,
  }

}

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
        <label>Category of the book</label>
        <input type="text" name="category" placeholder="Category of the book"
        value={category}
        onChange={handleCategory}
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