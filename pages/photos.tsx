// photos.ts

export interface Photo {
  src: string;
  width: number;
  height: number;
}

const photos: Photo[] = [
  {
    src: "../public/photos/group1.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "../public/photos/group2.jpg",
    width: 1200,
    height: 800,
  },
  {
    src: "../public/photos/group3.jpg",
    width: 1200,
    height: 800,
  },
  {
    src: "../public/photos/group4.jpg",
    width: 1200,
    height: 800,
  },
  {
    src: "../public/photos/group5.jpg",
    width: 1200,
    height: 800,
  },
  {
    src: "../public/photos/group6.jpg",
    width: 1200,
    height: 800,
  },
  {
    src: "../public/photos/group7.jpg",
    width: 1200,
    height: 800,
  },
  {
    src: "../public/photos/group8.jpg",
    width: 1200,
    height: 800,
  },
  {
    src: "../public/photos/group9.jpg",
    width: 1200,
    height: 800,
  },
];

export default photos;
