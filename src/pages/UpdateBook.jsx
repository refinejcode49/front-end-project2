import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBook = () => {
    const [title, setTitle] = useState("");
    const [authors, setAuthors] = useState("");
    const [categories, setCategories] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [addedBy, setAddedBy] = useState("");

    const { bookId } = useParams();

    const nav = useNavigate();

    useEffect(()=> {
      fetch(`http://localhost:5005/books/${bookId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("here is one book", data);
        setBook(data);
      })
      .catch((error)=> console.log("the error is :", error));
    }, [bookId]);

    async function handleUpdateBook(event) {
      // to prevent the form  from refreshing the page
      event.preventDefault();
      // add the properties to update
      const updateBook = {
        title: title,
        authors: authors,
        categories: categories,
        description: description,
        thumbnail: imageURL,
        addedBy: addedBy,
      };
      // to update the database
      axios
      .put(`http://localhost:5005/books/${bookId}`)
      .then((response)=>{
        console.log("successfully updated", response.data);
        nav("/");
      })
      .catch((error)=>console.log(error));
    }

  return (
    <div>
        <h2>Update the Book</h2>
          <form className="edit-book-form" onSubmit={handleUpdateBook}>
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
                <input 
                    type="text" 
                    name="categories" 
                    placeholder="Categories of the book"
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

            <button type="submit" className="edit-btn">
          Edit Book
        </button>
      </form>
    </div>
  )
}

export default UpdateBook