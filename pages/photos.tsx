import { useState } from "react";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import photos from "../components/photoGallery";

export default function App() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "#333",
          color: "#fff",
        }}
      >
        <h1>Photo Gallery</h1>
        <nav>
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <li style={{ margin: "0 10px" }}>
              <a href="#home" style={{ color: "#fff", textDecoration: "none" }}>
                Home
              </a>
            </li>
            <li style={{ margin: "0 10px" }}>
              <a
                href="#about"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                About
              </a>
            </li>
            <li style={{ margin: "0 10px" }}>
              <a
                href="#contact"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <RowsPhotoAlbum
        photos={photos}
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}
