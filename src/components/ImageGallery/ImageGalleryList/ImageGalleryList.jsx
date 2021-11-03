import ImageGalleryItem from "../ImageGalleryItem";

function ImageGalleryList({ imageslist }) {
  return (
    <ul className="ImageGallery">
      {imageslist.map((image) => {
        return (
          <ImageGalleryItem
            id={image.id}
            digImg={image.largeImageURL}
            smallImg={image.webformatURL}
          />
        );
      })}
    </ul>
  );
}

export default ImageGalleryList;
