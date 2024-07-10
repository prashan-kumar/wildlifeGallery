import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar' id='nav'>
      <div>
      <h1>WildLife Gallery</h1>
      </div>
      <div className='items'>
      <p><a href='#nav'>Home</a></p>
      <p><a href='#title'>Upload</a></p>
      <p><a href='#message'>Photos</a></p>
      <p><a href='#review'>Review</a></p>
      </div>
    </div>
  )
}

export default Navbar
