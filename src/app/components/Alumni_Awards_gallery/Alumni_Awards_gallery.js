import React, { useEffect, useState } from "react";
import "./Alumni_Awards_gallery.css";
import Image from "next/image";
import { getAboutUsGallery } from "@/app/hooks/UseApi";

const Alumni_Awards_gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await getAboutUsGallery();
        setGalleryItems(data?.response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchGallery();
  }, []);

  if (!galleryItems || galleryItems.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="gallery">
      <div className="gallery__column">
        {galleryItems.slice(0, 27).map((item, index) => (
          <>
            <figure className="gallery__thumb" data-aos="fade-up" key={index}>
              <Image
                src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${item.image}`}
                width={350}
                height={240}
                alt={`Picture ${index + 1}`}
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
               {item.title}
              </figcaption> */}
            </figure>
          </>
        ))}
      </div>
    </div>
  );
};

export default Alumni_Awards_gallery;
