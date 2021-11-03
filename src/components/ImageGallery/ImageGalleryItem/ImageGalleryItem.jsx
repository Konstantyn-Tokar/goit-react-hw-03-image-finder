function ImageGalleryItem({ id, digImg, smallImg }) {
  return (
    <li className="ImageGalleryItem" key={id}>
      <img src={smallImg} alt="картинка" data-img={digImg} />
    </li>
  );
}
export default ImageGalleryItem;
