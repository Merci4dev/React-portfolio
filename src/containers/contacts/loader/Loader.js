// this loader and styles come from the website https://loading.io/
import React from 'react'
import './loaderStyles.css'

function Loader() {
  return (
    <div className='loader__container'>
    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
</div>
  )
}

export default Loader