import type { Photo } from "react-photo-album";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function assetLink(asset: string, width: number) {
  return `https://assets.react-photo-album.com/_next/image?url=${encodeURIComponent(`/_next/static/media/${asset}`)}&w=${width}&q=75`;
}

const photos = [
  {
    asset: "/photos/group1.jpg",
    width: 1536,
    height: 2048,
    alt: "group1",
  },
  {
    asset: "/photos/group2.jpg",
    width: 2048,
    height: 1536,
    alt: "group1",
  },
  {
    asset: "/photos/group3.jpg",
    width: 360,
    height: 480,
    alt: "group1",
  },
  {
    asset: "/photos/group4.jpg",
    width: 3024,
    height: 4032,
    alt: "group1",
  },
  {
    asset: "/photos/group5.jpg",
    width: 2048,
    height: 1536,
    alt: "group1",
  },
  {
    asset: "/photos/group6.jpg",
    width: 360,
    height: 480,
    alt: "group1",
  },
  {
    asset: "/photos/group7.jpg",
    width: 2218,
    height: 2958,
    alt: "group1",
  },
  {
    asset: "/photos/group8.jpg",
    width: 3024,
    height: 4032,
    alt: "group1",
  },
  {
    asset: "/photos/group9.jpg",
    width: 360,
    height: 480,
    alt: "group1",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: asset,
      alt,
      width,
      height,
    }) as Photo
);

export default photos;
