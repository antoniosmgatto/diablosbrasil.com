import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const Gallery = (props) => {
  const id = "gallery";
  const photos = [
    {
      url: "/photos/diablos-1.jpg",
      width: 1280,
      height: 960,
      description: "Na estrada",
    },
    {
      url: "/photos/diablos-1.jpg",
      width: 1280,
      height: 960,
      description: "Na estrada",
    },
    {
      url: "/photos/diablos-1.jpg",
      width: 1280,
      height: 960,
      description: "Na estrada",
    },
    {
      url: "/photos/diablos-1.jpg",
      width: 1280,
      height: 960,
      description: "Na estrada",
    },
    {
      url: "/photos/diablos-1.jpg",
      width: 1280,
      height: 960,
      description: "Na estrada",
    },
    {
      url: "/photos/diablos-1.jpg",
      width: 1280,
      height: 960,
      description: "Na estrada",
    },
    {
      url: "/photos/diablos-1.jpg",
      width: 1280,
      height: 960,
      description: "Na estrada",
    },
    {
      url: "/photos/diablos-1.jpg",
      width: 1280,
      height: 960,
      description: "Na estrada",
    },
    {
      url: "/photos/diablos-1.jpg",
      width: 1280,
      height: 960,
      description: "Na estrada",
    },
  ];

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: `#${id}`,
      children: "a",
      showHideAnimationType: "fade",
      imageClickAction: "close",
      tapAction: "close",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className="pswp-gallery grid grid-cols-1 md:grid-cols-3 gap-4" id={id}>
      {photos.map((image, index) => (
        <a
          className="relative"
          href={image.url}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={`${id}-${index}`}
          target="_blank"
          rel="noreferrer"
        >
          <img src={image.url} alt={image.description} />
        </a>
      ))}
    </div>
  );
};

Gallery.propTypes = {};

export default Gallery;
