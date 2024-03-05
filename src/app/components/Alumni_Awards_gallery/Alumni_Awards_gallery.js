import React, { useEffect, useState } from "react";
import "./Alumni_Awards_gallery.css";
import Image from "next/image";
import { getAward } from "@/app/hooks/UseApi";

const Alumni_Awards_gallery = () => {
  const [Awards, setAwards] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await getAward();
        setAwards(data?.response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchGallery();
  }, []);

  if (!Awards || Awards.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="gallery">
      <div className="gallery__column">
        {Awards.map((item, index) => (
          <>
            <figure className="gallery__thumb" key={index}>
              <Image unoptimized={true}
          unselectable={true}
                src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${item?.image}`}
                width={350}
                height={240}
                alt={`Picture ${index + 1}`}
                className="gallery__image"
                loading="lazy"
              />
            </figure>
          </>
        ))}
      </div>
    </div>
  );
};

export default Alumni_Awards_gallery;
