import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './index.css'

const Home = () => {
  return (
    <>
      <main className="containerHome" >
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </main>
    </>
  )
}

export default Home