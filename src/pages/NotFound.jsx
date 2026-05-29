import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>迷子 · Nie znaleziono</h2>
        <p>Strona, której szukasz, nie istnieje lub została przeniesiona.</p>
        <Link to="/" className="btn-primary">Wróć na stronę główną</Link>
      </div>
    </div>
  )
}

export default NotFound