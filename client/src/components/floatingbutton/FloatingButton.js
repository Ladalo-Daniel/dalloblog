import React from 'react'
import "./floatingbutton.css"

export default function FloatingButton({toggleSidebar }) {
  return (
      <button className='floatButton'>{ toggleSidebar ? <i className='fas fa-times'></i> : "About Me"}</button>
  )
}
