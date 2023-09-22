import React from 'react'
import "./prompt.css"

export default function Prompt({ message, onConfirm, onCancel }) {
  return (
    <div className='prompt'>
       <div className="promptWrapper">
       <p>{message}</p>
       <div className='btnWrapper'>
       <button onClick={onConfirm}>Yes</button>
       <button onClick={onCancel}>No</button>
       </div>
       </div>
    </div>
  )
}
