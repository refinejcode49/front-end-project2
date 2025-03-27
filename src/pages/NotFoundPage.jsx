import React from 'react'
import { BookX} from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <BookX className="not-found-style" />
      <h1 className="not-found-style">404 Lost Parchment</h1>
        <p className="not-found-p"> Oh no! It seems that you have turned a page that does not exist in our imaginary realm. The book you are looking for may be hidden in a secret library...</p>
          <Link to="/">
            <button className="not-found-btn">BACK</button>
          </Link>
      <div className="not-found-spell">
        <p className="not-found-p-spell">Perhaps a spell of disorientation has been cast on this page ?</p>
      </div>
    </div>
  )
}

export default NotFoundPage;