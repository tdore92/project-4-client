import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (

    <>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1 has-text-centered">
              <Link to='/dinosaurs'><button className="home-button dino-home-button"></button></Link>
              <Link to='/miscs'><button className="home-button misc-home-button"></button></Link>
            </h1>
          </div>
        </div>
      </section>
    </>



  )

}

export default Home