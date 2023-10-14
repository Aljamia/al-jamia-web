"use client";
import React, { useState, useEffect, useRef } from "react";
import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { getAboutUsGallery } from "@/app/hooks/UseApi";
import { motion } from "framer-motion";

function Studentgallery() {
  const [gallery, setGallery] = useState([]);
  const imagesRef = useRef([]);

  useEffect(() => {
    const fetchGallery = async () => {
      const data = await getAboutUsGallery();
      setGallery(data?.response);
    };
    fetchGallery();
  }, []);

  const handleScroll = () => {
    imagesRef.current.forEach((img) => {
      const imgBottom = img.offsetTop + img.height;
      const scrollBottom = window.scrollY + window.innerHeight;
      if (scrollBottom > img.offsetTop && scrollBottom < imgBottom) {
        img.classList.add("slide-in");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [gallery]);

  return (
    <div>
      <PageHeader />
      <div className="AboutUspage-img">
        <Image
          src="/banner/Recognition_Awards.png"
          layout="responsive"
          width={1000}
          height={500}
          alt="Image"
        />
      </div>
      <div className="AboutUspage-items">
        <div className="AboutUspage-ourMission">
          <Container>
            <Row>
              {gallery.map((item, index) => (
                <Col key={index} xl={3} lg={3} md={6} sm={6} xs={12}>
                  <div className="image-container">
                    <motion.figure
                      ref={(el) => (imagesRef.current[index] = el)}
                      initial={{ opacity: 0, translateY: "100%" }}
                      animate={{ opacity: 1, translateY: "0%" }}
                      transition={{ duration: 3.3 }}
                    >
                      <Image
                        src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${item?.image}`}
                        width={300}
                        height={300}
                        layout="responsive"
                        alt={`Picture ${index + 1}`}
                        loading="eager"
                      />
                    </motion.figure>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .image-container {
          padding: 10px; /* Add padding */
          margin-bottom: 20px; /* Add margin between images */
        }

        @media (max-width: 767px) {
          .student_gallery_img {
            object-fit: contain;
          }
        }
      `}</style>
    </div>
  );
}

export default Studentgallery;
