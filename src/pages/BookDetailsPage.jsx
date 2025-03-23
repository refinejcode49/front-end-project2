import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const BookDetailsPage = () => {
  const [book, setBook] = useState({});
  const { bookId } = useParams();
  console.log(bookId);

  useEffect(()=> {
    /*async function getOneBook() {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
        console.log("response: ", response);
        // in the google json file the data is stored inside items
        setBook(response.data.items)
      } catch (error) {
        console.log(error);
      }
    getOneBook();*/

    fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setBook(response.data.items)
      })
      .catch((error)=>{
        console.log("the error is :", error);
      })

     /*axios
      get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
      .then(({data}) => {
        console.log("response from axios: ", data);
        setBook(data.items)
     })
      .catch((err) => {
        console.log(err);
     });*/

    });
  

  return (
    <div>
      <article>
          {/*<img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.description} />
          <h2>{book.volumeInfo.title}</h2>
          <p>{book.volumeInfo.authors}</p>*/}
      
      <Link to="/">
        <button>BACK</button>
      </Link>
      </article>
    </div>
  )
}

export default BookDetailsPage