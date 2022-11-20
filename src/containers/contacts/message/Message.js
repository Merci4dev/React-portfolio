import React from 'react'
import './msgStyles.css'

function Message({msg}) {
  return (

    <h3 className='success__message flicker-in'>{msg}</h3>
  )
}

export default Message