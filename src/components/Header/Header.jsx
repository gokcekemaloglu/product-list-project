import React from 'react'
import "./Header.scss"

const Header = () => {
  return (
    <div>
      <h1>Product List</h1>
      <div className="btn-div">
        <button>ALL</button>
        <button>ELECTRONICS</button>
        <button>JEWELERY</button>
        <button>MEN'S CLOTHING</button>
        <button>WOMEN'S CLOTHING</button>
      </div>
    </div>
  )
}

export default Header