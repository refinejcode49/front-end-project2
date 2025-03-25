import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookDetailsPage from './pages/BookDetailsPage'
import BooksListPage from './pages/BooksListPage'
import AddBook from './pages/AddBook'
import Navbar from './components/Navbar'
import ErrorPage from './pages/ErrorPage'
import { Route, Routes } from 'react-router-dom'
import UpdateBook from './pages/UpdateBook'
import Footer from './components/Footer'
import AboutUsPage from './pages/AboutUsPage'

function App() {


  return (
    <>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BooksListPage />} />
        <Route path="/books/:bookId" element={<BookDetailsPage />} />
        <Route path="/new-book" element={<AddBook />} />
        <Route path="/edit-book" element={<UpdateBook />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />

    </div>
    </>
  );
}

export default App;
