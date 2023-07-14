import React from 'react'
import "./About.css"
const About = () => {
  return (
    <div>
      <div className='about-Title'>
        <h1>Welcome to Al Jamia al Islamia</h1>
      </div>
      <div className='about-description'>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id dignissimos asperiores ut omnis totam quo veniam,
           necessitatibus a veritatis laudantium reiciendis eum iure, officiis expedita consequatur 
           tempora illo inventore quidem?  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Fugiat vitae, est, eius tenetur expedita quos debitis enim nostrum sunt culpa laborum. 
           Provident voluptatum harum ut ipsam aspernatur 
           amet quasi nemo. </p>
      </div>
      <div className="school-img">
       <div className="btn">
        <button>Take a Tour</button>
       </div>
       <div className="image">
        <img src="image 7.png" alt="" />
       </div>
      </div>
    </div>
  )
}

export default About
