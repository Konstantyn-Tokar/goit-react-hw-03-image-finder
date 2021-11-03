function ImageGalleryItem({ digImg, smallImg }) {
  return (
    <li>
      <img
        src={
          smallImg !== null
            ? `https://image.tmdb.org/t/p/w300/${smallImg}`
            : `https://image.tmdb.org/t/p/w300//s7D9c9kSdYbYO3hSvZHVBiUf9gk.jpg`
        }
        alt="картинка"
        data-img={
          digImg !== null
            ? `https://image.tmdb.org/t/p/original/${digImg}`
            : `https://image.tmdb.org/t/p/original//s7D9c9kSdYbYO3hSvZHVBiUf9gk.jpg`
        }
      />
    </li>
  );
}
export default ImageGalleryItem;
