import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const BookDetailsPage = () => {
  const [book, setBook] = useState();
  const { bookId } = useParams();
  console.log("bookID is : ", bookId);

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
    if(!book) {
      return <div>Book not found</div>
    }


  return (
    <div>
      <article>
         
          <h2 className="title">Title: {book.volumeInfo.title}</h2>
          <p className="authors">Author: {book.volumeInfo.authors}</p>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.description} className="book-image" />
          <p className="description">{book.volumeInfo.description}</p>
         
      <Link to="/" className="back-btn">
        <button>BACK</button>
      </Link>
      <Link className="favorite-btn">
        <button>Favorite</button>
      </Link>
      </article>
    </div>
  )
}

export default BookDetailsPage;