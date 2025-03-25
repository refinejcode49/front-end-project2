import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const BookDetailsPage = () => {
  const [book, setBook] = useState(null);
  const { bookId } = useParams();

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
    }, [bookId])

    function handleDelete() {
      // remove it from the frontend
         //we filter the through the book, to compare if bookid is not equal to oneBook.id then we take it out
          const filteredBook = Object.keys(book).filter(key => key.includes("id"))
          console.log("delete button clicked ", bookId);
        //we set setBook to the new filteredBook variable
          setBook(filteredBook);
      // remove it from the database with axios
      axios
      .delete(`http://localhost:5005/books/${bookId}`)
      .then((res) => {
        console.log("book deleted", res.data);
        setBook(filteredBook)
        navigate("/")
        
      })
      .catch((err)=> console.log(err))
    }

    if(!book) {
      return <div>Book not found</div>
    }
 
  return (
    <div>
      <article>
         
          <h2 className="title">Title: {book.volumeInfo?.title}</h2>
          <p className="authors">Author: {book.volumeInfo?.authors}</p>
          <img src={book.volumeInfo?.imageLinks?.thumbnail} alt={book.volumeInfo?.description} className="book-image" />
          <p className="description">{book.volumeInfo?.description}</p>
         
      <Link to="/" className="back-btn">
        <button>BACK</button>
      </Link>
      <Link className="favorite-btn">
        <button>Favorite</button>
      </Link>
      <button onClick={()=> {
        handleDelete();
      }}>Delete book</button>
      </article>
    </div>
  );
};

export default BookDetailsPage;
