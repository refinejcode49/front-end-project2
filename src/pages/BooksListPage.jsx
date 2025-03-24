import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { data, Link } from 'react-router-dom';

const BooksListPage = () => {

  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    async function getAllBooks() {
      try {
        const response = await axios.get("https://www.googleapis.com/books/v1/volumes?q=subject:fantasy&maxResults=40");
        console.log("response: ", response);
        // in the google json file the data is stored inside items
        setAllBooks(response.data.items)
      } catch (error) {
        console.log(error);
      }
    }
    //to work you have to call getAllbooks() !!!!!!!!!!!
    getAllBooks();

    /*fetch("https://www.googleapis.com/books/v1/volumes?q=subject:fantasy&maxResults=40")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setAllBooks(response.data.items)
      })
      .catch((error)=>{
        console.log("the error is :", error);
      })*/
     /*axios("https://www.googleapis.com/books/v1/volumes?q=subject:fantasy&maxResults=40")
     .then(({data}) => {
      console.log("response from axios: ", data);
      setAllBooks(data.items)
     })
     .catch((err) => {
      console.log(err);
     });*/

  }, []);




  return (
      <div className="all-books">
        {allBooks.map((oneBook) => {
          return (
            <div key={oneBook.id} className="book-card">
              <article>
                <Link to={"/books/:bookId"}>
                  <img src={oneBook.volumeInfo.imageLinks.smallThumbnail} alt={oneBook.volumeInfo.description} />
                </Link>
                <h2>{oneBook.volumeInfo.title}</h2>
                <p>{oneBook.volumeInfo.authors}</p>
              </article>
            </div>
          );
        })}
      </div>
  );
};

export default BooksListPage;
