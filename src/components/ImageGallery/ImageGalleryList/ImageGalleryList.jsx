import ImageGalleryItem from "../ImageGalleryItem";
import PropTypes from "prop-types";

import s from "./ImageGallery.module.css";

function ImageGalleryList({ imageslist, onImageClick }) {
  return (
    <ul className={s.ImageGallery}>
      {imageslist.map((image) => {
        return (
          <ImageGalleryItem
            key={image.id}
            smallImg={image.webformatURL}
            digImg={image.largeImageURL}
            onClick={onImageClick}
          />
        );
      })}
    </ul>
  );
}

ImageGalleryList.propTypes = {
  imageslist: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ),
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryList;
