import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookDetailsPage from './pages/BookDetailsPage'
import BooksListPage from './pages/BooksListPage'
import AddBook from './pages/AddBook'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import UpdateBook from './pages/UpdateBook'
import Footer from './components/Footer'
import AboutUsPage from './pages/AboutUsPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {


  return (
    <>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BooksListPage />} />
        <Route path="/books/:bookId" element={<BookDetailsPage />} />
        <Route path="/new-book" element={<AddBook />} />
        <Route path="/edit-book/:bookId" element={<UpdateBook />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />

    </div>
    </>
  );
}

export default App;
