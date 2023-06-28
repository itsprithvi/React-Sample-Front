import React from 'react'

const Footer = () => {

    const year = new Date();


  return (
    <div>
        <footer>Copyrights &copy; {year.getFullYear()} </footer>
    </div>
  )
}

export default Footer