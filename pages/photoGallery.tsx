import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";

import photos from "./photos";
import Navbar from "@/components/Navbar";

export default function PhotoGallery() {
  return (
    <div>
      <Navbar />
      <ColumnsPhotoAlbum photos={photos} />
    </div>
  );
}
