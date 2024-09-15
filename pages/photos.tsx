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
import Navbar from "@/components/Navbar";
import { Caprasimo } from "next/font/google";

const caprasimo = Caprasimo({ weight: "400", subsets: ["latin"] });

export default function App() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <Navbar />

      <div className="p-4">
        <h1 className={`${caprasimo.className} text-3xl mb-4`}>General Meeting Photos</h1>
        <RowsPhotoAlbum
          photos={photos}
          targetRowHeight={150}
          onClick={({ index }) => setIndex(index)}
        />
      </div>

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
