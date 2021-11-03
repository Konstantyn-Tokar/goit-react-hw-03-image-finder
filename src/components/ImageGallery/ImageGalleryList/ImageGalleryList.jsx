import ImageGalleryItem from "../ImageGalleryItem";

function ImageGalleryList({ imageslist }) {
  return (
    <ul className="ImageGallery">
      {imageslist.map((image) => {
        return (
          <ImageGalleryItem
            key={image.id}
            smallImg={image.poster_path}
            digImg={image.backdrop_path}
          />
        );
      })}
    </ul>
  );
}

export default ImageGalleryList;
