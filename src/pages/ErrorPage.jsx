import React from 'react'

const ErrorPage = () => {
  return (
    <div>
      <h1>404</h1>
      <h2>Lost Parchment</h2>
      <p> Oh no! It seems that you have turned a page that does not exist in our imaginary realm. The book you are looking for may be hidden in a secret library...</p>
      <button className="back-btn">BACK</button>
      <button className="home-btn">Home</button>
      <div className="404-spell">
        <p>Perhaps a spell of disorientation has been cast on this page?</p>
      </div>
    </div>
  )
}

export default ErrorPage