import { useState } from 'react'
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
  //create a state hook to manage dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

   // Toggle dark mode
   const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
    <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
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