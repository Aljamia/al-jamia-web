import React from 'react'
import { Container } from 'react-bootstrap'
import "./Event.css"
const Library = () => {
  return (
    <div>
   <div className="event-section-2">
          <div className="event-s-img">
            <img src="Mask group.png" alt="" width="100%" />
          </div>
          <Container className='headlibrary'>
            <div className="library">
              <h1>Central Library</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                eveniet, sit similique eum ipsum fugit tenetur? Aliquid
                voluptatum perspiciatis eveniet ipsam eius, vero Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Maiores, eaque
                repellat at earum blanditiis soluta est dolor molestiae
                deserunt! Autem corporis eius velit voluptatem ipsa iusto,
                reiciendis cum adipisci eos. consequuntur, aliquam maxime
                accusantium sequi libero error?
              </p>
            </div>
            <div className="learn-btn">
              <button>Learn More</button>
            </div>
          </Container>
        </div>
    </div>
  )
}

export default Library
