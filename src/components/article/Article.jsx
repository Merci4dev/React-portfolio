import React from 'react'
import './article.css'
// Estos articulos seran usados en el componente blog 

const Article = ({imgUrl, date, title, desc, url,url2}) => {
  return (
    <div className='blob-container_article'>
      <div className='blob-container_article-image'>
        <img src={imgUrl} alt='blogImage' />
      </div>
      <div className='blob-container_article-content'> 
          <div>
            <p>{date}</p>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
          
          <div className='project__link'>
            <a href={url} target="_blank" rel="noopener"> 
            Project online 
            </a>
            
            <a href={url2} target="_blank" rel="noopener"> 
              Project Code
            </a>
          </div>
      </div>
    </div>
  )
}

export default Article

