import React from 'react'
import './services.css'
import servicesDisign from '../../assets/services-media/service-design.svg'
import servicesCode from '../../assets/services-media/service-code.svg'
import servicesHosting from '../../assets/services-media/service-hosting.svg'
import servicesSeo from '../../assets/services-media/service-seo.svg'
import servicesWpo from '../../assets/services-media/service-wpo.svg'
import figma from '../../assets/tech-icons/figma.svg'
import server from '../../assets/images/server.png'

const servicesData = [
  {
    title: "Web Design",
    text: "Your digital identity reveals the purpose of your project, reveals who you are. A professional and friendly design is the first step on the way to success.",
    text2: "Lest start your new website contemporary and customized. Friendly and professional interface, state-of-the-art color matching, responsive design and more.",
    text3: "My job will be to graphically capture your business ideas digitally, as well as the best tips for your project to be the next unicorn.",
    img:`${servicesDisign}`,
    img2:`${figma}`,
 
  },
  {
    title: " Web & Apps Developer",
    text: "Let your ideas come to life in the digital world. Use technology to reach your target audience. It's time to take your ideas to the next level.",
    text2: "After a good design, the next step is the web application coding. It does not matter if it is a website, social network, complex platform or online store.",
    text3: "My job is to transform any kind of ideas, “is to transform Your ideas” into code. For each project will be used the most efficient technologies.",
    img:`${servicesCode}`
   
  },
  {
    title: "Hosting & Server",
    text: "The real birth of a project starts with hosting it with a host provider or clouds Server.",
    text2: "If you decide to build a web page or a more complex application, when you finish all the design and programming process, the next step is to host your project in a cloud service.",
    text3: "This can be a bit of a tedious task, but I'll take care of finding the hosting service that suits your project and your budget.",
    img:`${servicesHosting}`,
    severImage:`${server}`,
  },
  {
    title: "SEO, WPO",
    text: "At the marketing world, a text is not just a text. How, when and where are more important than the text itself. At the digital world, an image is not just an image. The time here is counted in ms.",
    text2: "If you want your web application to be visible to the Google search engine and be positioned in the first places. If you want, people just by typing a word related to your services find you as in the firsts Google results.",
    text3: "Today, no one has time. Responses must be instant. The data must be exposed in the shortest possible time. Therefore, if your web application is not optimized to react immediately to customer requests, they will end up leaving the site.",
    img:`${servicesSeo}`
  },
  {
    title: "SMO",
    text: "Social networks are the new communication tool. Using it allow you to reach your audience more efficiently.",
    text2: "Improving your digital performance is something that is a top priority for me.",
    text3: "For this reason, implement the (smo) social networks Optimization, it will allow you to use all the power of it to reach your target audience.",
    img:`${servicesWpo}`,

  },

]

const Features = () => {
  return (
    <div className='services' id='services'>

      <div className='services-heading'>
        <h3 className='gradient__text'>Thank you for visiting our Services session. Next we will be introducing you through our multiple services.</h3>
      </div>

      {servicesData.map((item,index) =>(
        <div key={index} className='services-container'>
          <div className='overlay'>

            <h3> 
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              {<img src={item.img} className='img-icon'/>}
              {item.title}
            </h3>
            <div className='services__content'>
              <div>
                <p>{item.text}</p>
        
                {<img src={item.img2} className='img-desing'/>}
              </div>
              <div>
                <p>{item.text2}</p>
                <p>{item.text3}</p>
              </div>
            </div>

          </div>

        </div> 
      ))}
      </div>
  )
}

export default Features