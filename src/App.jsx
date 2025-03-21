import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import BookDetailsPage from './pages/BookDetailsPage'
import BooksListPage from './pages/BooksListPage'
import AddBook from './pages/AddBook'
import Navbar from './components/Navbar'
import ErrorPage from './pages/ErrorPage'
import UpdateBook from './pages/UpdateBook'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksListPage />} />
        <Route path="/books/:bookId" element={<BookDetailsPage />} />
        <Route path="/new-book" element={<AddBook />} />
        <Route path="/edit-book" element={<UpdateBook />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />

    </div>
    </>
  )
}

export default App
