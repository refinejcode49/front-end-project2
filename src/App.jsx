import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksListPage />} />
        <Route path="/books/:bookId" element={<BookDetailsPage />} />
        <Route path="/new-book" element={<AddBook />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>

    </div>
    </>
  );
}

export default App;
