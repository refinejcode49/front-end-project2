import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const BookDetailsPage = () => {
  const [book, setBook] = useState({});
  const { bookId } = useParams();
  console.log("bookID is : ", bookId);

  useEffect(()=> {
   
    fetch(`http://localhost:5005/books/${bookId}`)
      .then((response) => {
        return response.json();
        console.log("here is the response", response.json());
      })
      .then((parsed) => {
        //console.log("here is one book", parsed);
        setBook(parsed);
      })
      .catch((error)=> console.log("the error is :", error));
    }, [bookId])
    


  return (
    <div>
      <article>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.description} />
          <h2>{book.volumeInfo.title}</h2>
          <p>{book.volumeInfo.authors}</p>
      
      <Link to="/">
        <button>BACK</button>
      </Link>
      </article>
    </div>
  )
}

export default BookDetailsPage;