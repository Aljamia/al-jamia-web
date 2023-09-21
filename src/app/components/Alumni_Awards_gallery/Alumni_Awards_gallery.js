"use client";
import React, { useEffect, useState } from "react";
import "./Alumni_Awards_gallery.css";
import Image from "next/image";
import { getAboutUsGallery } from "@/app/hooks/UseApi";

const Alumni_Awards_gallery = () => {
  const [galleryitems, setGalleryItems] = useState();
  useEffect(() => {
    const fetchgallery = async () => {
      const data = await getAboutUsGallery();
      setGalleryItems(data?.response);
    };
    fetchgallery();
  }, []);
  if (!galleryitems || galleryitems.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <>
        <div className="gallery">
          <div className="gallery__column">
            <figure className="gallery__thumb" data-aos="fade-up">
              <Image
                src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${galleryitems[0]?.image}`}
                width={300}
                height={250}
                alt="Picture of the author"
                className="gallery__image"
              />
              
              <figcaption class="gallery__caption">
                Portrait by Jessica Felicio
              </figcaption>
            </figure>

            <figure class="gallery__thumb" data-aos="fade-up">
              <Image
                src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${galleryitems[1]?.image}`}
                width={270}
                height={200}
                alt="Picture of the author"
                className="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Oladimeji Odunsi
              </figcaption>
            </figure>

            <figure class="gallery__thumb" data-aos="fade-up">
              <Image
                src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${galleryitems[2]?.image}`}
                width={350}
                height={280}
                alt="Picture of the author"
                className="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Alex Perez
              </figcaption>
            </figure>
          </div>

          <div class="gallery__column">
            <figure class="gallery__thumb" data-aos="fade-up">
              <Image
                src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${galleryitems[3]?.image}`}
                width={350}
                height={180}
                alt="Picture of the author"
                className="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Hikiapp
              </figcaption>
            </figure>

            <figure class="gallery__thumb" data-aos="fade-up">
              <Image
                src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${galleryitems[4]?.image}`}
                width={300}
                height={250}
                alt="Picture of the author"
                className="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Ivana Cajina
              </figcaption>
            </figure>

            <figure class="gallery__thumb" data-aos="fade-up">
              <Image
                src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${galleryitems[5]?.image}`}
                width={200}
                height={300}
                alt="Picture of the author"
                className="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Jeffery Erhunse
              </figcaption>
            </figure>
          </div>

          <div class="gallery__column">
            <figure class="gallery__thumb" data-aos="fade-up">
              <Image
                src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${galleryitems[6]?.image}`}
                width={350}
                height={240}
                alt="Picture of the author"
                className="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Mari Lezhava
              </figcaption>
            </figure>

            <figure class="gallery__thumb" data-aos="fade-up">
              <Image
                src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${galleryitems[7]?.image}`}
                width={350}
                height={228}
                alt="Picture of the author"
                className="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Ethan Haddox
              </figcaption>
            </figure>

            <figure class="gallery__thumb" data-aos="fade-up">
              <Image
                src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${galleryitems[8]?.image}`}
                width={350}
                height={260}
                alt="Picture of the author"
                className="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Amir Geshani
              </figcaption>
            </figure>
          </div>

          <div class="gallery__column">
            <figure class="gallery__thumb" data-aos="fade-up">
              <Image
                src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${galleryitems[9]?.image}`}
                width={350}
                height={265}
                alt="Picture of the author"
                className="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Tyler Nix
              </figcaption>
            </figure>

            <figure class="gallery__thumb" data-aos="fade-up">
              <Image
                src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${galleryitems[10]?.image}`}
                width={350}
                height={240}
                alt="Picture of the author"
                className="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Jasmin Chew
              </figcaption>
            </figure>

            <figure class="gallery__thumb" data-aos="fade-up">
              <Image
                src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${galleryitems[11]?.image}`}
                width={350}
                height={220}
                alt="Picture of the author"
                className="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Dima DallAcqua
              </figcaption>
            </figure>
          </div>
        </div>
      </>
    </div>
  );
};

export default Alumni_Awards_gallery;
