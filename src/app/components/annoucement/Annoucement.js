// import React, { useState, useEffect } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { Container } from "react-bootstrap";
// import "./Announcement.css";
// import Link from "next/link";
// import { getNotification } from "@/app/hooks/UseApi";
// import { FaCableCar } from "react-icons/fa6";
// const Annoucement = () => {
//   const [notify, setNotify] = useState([]);
//   useEffect(() => {
//     const fetchNotify = async () => {
//       const data = await getNotification();
//       setNotify(data?.response);
//     };

//     fetchNotify();
//   }, []);

//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 2000,
//     slidesToShow: 8,
//     pauseOnHover: true,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     vertical: true, // Set the vertical option to true
//     verticalSwiping: true, // Enable vertical swiping
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="annon-header">
//       <Container className="annon-slick">
//         <Slider {...settings} className="annon-slick ">
//           <div className="annon-caro"></div>

//           {notify.map((notify, index) => (
//             <div className="annon-caro" key={index}>
//               <div className="right-event-des">
//                 <span>
//                   {" "}
//                   <p>
//                     {notify.title}
//                     <Link href={notify.link} style={{ textDecoration: "none" }}>
//                       {" "}
//                       <h2>
//                         Click Here <FaCableCar />
//                       </h2>
//                     </Link>
//                     <hr />
//                   </p>{" "}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </Container>
//     </div>
//   );
// };

// export default Annoucement;

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Announcement.css"; // Make sure to include your custom CSS file here
import { getNotification } from "@/app/hooks/UseApi";
import Link from "next/link";
import { FaHandPointUp } from "react-icons/fa6";

const Announcement = () => {
  const [notify, setNotify] = useState([]);
  useEffect(() => {
    const fetchNotify = async () => {
      const data = await getNotification();
      setNotify(data?.response);
    };

    fetchNotify();
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    pauseOnHover: true,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <div className="news-alerts holder">
      <Slider {...settings}>
        {notify.map((item, index) => (
          <div className="news-item" key={index}>
            <span>
              <span className="date-display-single">{item.date}</span>
            </span>
            <Link
              href={item.link}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <h5 className="news-alert-title">{item.title}</h5>
              <Link style={{ textDecoration: "none" }} href={item.link}>
                <p className="news-alert-desc">
                  click here <FaHandPointUp />
                </p>
              </Link>
            </Link>
            <hr style={{ margin: "auto", width: "50%" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Announcement;
