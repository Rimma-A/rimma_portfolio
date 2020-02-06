import React from "react"

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
        </div>
        <div className="navigation">
          <nav>
            <a data-scroll href="#about">About</a>
            <a data-scroll href="/#work">Work</a>
            <a data-scroll href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
