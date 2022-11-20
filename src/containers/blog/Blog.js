import React from 'react'
import './blog.css'
// reusando la logicas del componente article
import { Article } from '../../components'
import {crudJsonServer, tasksCreator,ecomerceImg, blog04, blog05, enployeeDashboard} from './import'

const Blog = () => {
  return (
    <div className='projects' id='projects'>
      <div className='projects-heading'>
        <h3 className='gradient__text'>Congratulations. You have reached the most existing session of my portfolio.</h3>
        <h4 className=''>Switch between different projects to interact with them and see the code.</h4>
      </div>
      <div className='projects-container'>
        <div className='projects-container_groupB'>
        <Article 
            imgUrl={enployeeDashboard} 
            title="[ MERN ] User Management Dashboard"

            desc={`
            This is a user management dashboard. The administrator can manage all the employees and their tasks performed. In the backend we use node-js express and mongodb. On the frontend we use React . Everything in project is stored in the render platform.`}
            url="https://merci4tech.onrender.com/"
            url2="https://github.com/mercedes4developers/mern-api-server"
          /> 

        <Article 
            imgUrl={ecomerceImg} 
            title="Ecommerce [React, Nextjs, Sanity and stripe] App."

            desc={`Online store developed with React and Nextjs on the frontend and Sanity on the backend site. Stripe is used as a payment method. Todas la funcinalidades habituales de una tienda en linea estan implementadas. This project is hosted on github page as well as versel platform.`}
            url="https://ecomerce-sanity-next-stripe-4lehg53tv-mercedes4developers.vercel.app/"
            url2="https://github.com/mercedes4developers/ecomerce-sanity-next-stripe"
          /> 

          <Article 
            imgUrl={ crudJsonServer} 
            title="Json Server CRUD App to store Users"
            desc={`React Json Server CRUD App to add users. The data is stored in a json file through the json server api. Adding, editing and deleting users is possible. This project is hosted on github page.`}
            url="https://mercedes4developers.github.io/localstorage-basic-curd/"
            /> 

          <Article imgUrl={tasksCreator} 
            date="Sep 26, 2022"        
            title="Tasks Application"
            desc={`Application to add tasks. Added tasks are stored in local storage. Tasks marked as check can be deleted.This project is hosted on github page `}
            url="https://mercedes4developers.github.io/tasks-creator/"
          /> 

          <Article imgUrl={blog04} 
            date="Sep 26, 2022" 
            title="React Website"
            // eslint-disable-next-line react/jsx-no-duplicate-props
            url="https://mercedes4developers.github.io/react-single-website-page/"
            desc={`React Website. This website is perfect to build a platform with a backend site. This website uses the best practices of react. This project is hosted on github page `}
          /> 

          <Article imgUrl={blog05} 
            date="Sep 26, 2022" 
            title="React Website Portfolio"
            url="https://mercede-portfolio.onrender.com/"
            desc={`React Website. This website uses the best practices of react. Stores a list of the projects that I created for myself. This project is hosted on github page as well as versel platform.`}

          /> 

        </div>
      </div>
    </div>
  )
}

export default Blog