import React from 'react'
import "./Department.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const Deparments = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true, // Add this property to enable autoplay
    autoplaySpeed: 2000, // Set the autoplay speed in milliseconds (e.g., 2000ms = 2 seconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <div>
      <div className="department-section">
      <div className="container">
        <div className="row">
          <div className="department-heading">
          <h1>Department</h1>
        </div>
        <div className="department-para">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur consequuntur 
            deserunt dolorum qui itaque aliquid hic labore, aut illum expedita reiciendis blanditiis quibusdam rerum pariatur 
            consequatur optio ullam recusandae sequi?
          </p>
        </div>
          </div>
        </div>
        <div className="carousel-2">
             <Slider {...settings}>
             <div className="box">
              <div className="caro-img">
                <img src="book.png" alt="" />
              </div>
               <div className="caro-des">
               <h5>Centre for Information Technology</h5>
                <div className="caro-btn">
                  <button>Learn More</button>
                </div>
               </div>
            </div>
            <div className="box">
              <div className="caro-img">
                <img src="book.png" alt="" />
              </div>
               <div className="caro-des">
               <h5>Centre for Information Technology</h5>
                <div className="caro-btn">
                  <button>Learn More</button>
                </div>
               </div>
            </div>
            <div className="box">
              <div className="caro-img">
                <img src="book.png" alt="" />
              </div>
               <div className="caro-des">
               <h5>Centre for Information Technology</h5>
                <div className="caro-btn">
                  <button>Learn More</button>
                </div>
               </div>
            </div>
            <div className="box">
              <div className="caro-img">
                <img src="book.png" alt="" />
              </div>
               <div className="caro-des">
               <h5>Centre for Information Technology</h5>
                <div className="caro-btn">
                  <button>Learn More</button>
                </div>
               </div>
            </div>
            <div className="box">
              <div className="caro-img">
                <img src="book.png" alt="" />
              </div>
               <div className="caro-des">
               <h5>Centre for Information Technology</h5>
                <div className="caro-btn">
                  <button>Learn More</button>
                </div>
               </div>
            </div>
       
             </Slider>
          </div>
      </div>
    </div>
  )
}

export default Deparments
