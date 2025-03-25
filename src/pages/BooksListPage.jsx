import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BooksListPage = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    async function getAllBooks() {
      try {
        const response = await axios.get("http://localhost:5005/books");
        console.log("response: ", response);
        console.log("DataBase response: ", response.data);
        // in the google json file the data is stored inside items
        setAllBooks(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    //to work you have to call getAllbooks() !!!!!!!!!!!
    getAllBooks();
  }, []);
  
  

  return (
      <div className="all-books">
        <Link to="/new-book">
        <button className="add-btn">ADD BOOK</button>
        </Link>
        {allBooks.map((oneBook) => {
          return (
            <div key={oneBook.id} className="book-card">
              <article>
                <Link to={`/books/${oneBook.id}`}>
                <img
                    src={oneBook.volumeInfo?.imageLinks?.smallThumbnail || "default-thumbnail.jpg"}
                    alt={oneBook.volumeInfo?.description || "No description available"}
                />
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

