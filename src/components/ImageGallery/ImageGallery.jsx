import { Component } from "react";
import PropTypes from "prop-types";
import doFach from "../../helpers/ApiImg";
import scroll from "../../helpers/scroll";

import ImageGalleryList from "./ImageGalleryList";
import Button from "../Button";
import Modal from "../Modal";
import Loader from "react-loader-spinner";

import s from "./ImageGallery.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class ImageGallery extends Component {
  state = {
    images: null,
    page: 1,
    error: null,
    status: "idle",
    showModal: false,
    bigImg: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevName !== nextName) {
      this.setState({ status: "pending" });

      doFach(nextName, nextPage)
        .then((data) => this.setState({ images: data, status: "resolved" }))
        .catch((error) => this.setState({ error, status: "resjected" }));
    }

    if (prevPage !== nextPage) {
      this.setState({ status: "pending" });
      doFach(nextName, nextPage)
        .then((data) => {
          this.setState((prevState) => ({
            images: [...prevState.images, ...data],
            status: "resolved",
          }));
        })
        .catch((error) => this.setState({ error, status: "resjected" }));
    }

    if (this.state.page > 1) {
      scroll();
    }
  }

  onLoadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onImageClick = (e) => {
    const srs = e.target.dataset.img;

    this.setState({
      bigImg: srs,
      showModal: true,
    });
  };

  render() {
    const {
      state: { status, images, bigImg, showModal, error },
      onImageClick,
      onLoadMore,
      toggleModal,
    } = this;

    if (status === "idle") {
      return <h1>Введите тематику поиска изображения</h1>;
    }

    if (status === "pending") {
      return (
        <Loader
          className={s.loader}
          type="TailSpin"
          color="#00BFFF"
          height={150}
          width={150}
        />
      );
    }

    if (status === "resjected") {
      return <h1>{error.message}</h1>;
    }

    if (status === "resolved") {
      return (
        <div className={s.imageGallery}>
          <ImageGalleryList imageslist={images} onImageClick={onImageClick} />
          {images.length > 1 && <Button onClick={onLoadMore} />}

          {showModal && (
            <Modal onClose={toggleModal}>
              <img className={s.modalImg} src={bigImg} alt="Картинка" />
            </Modal>
          )}
        </div>
      );
    }
  }
}

ImageGallery.propType = {
  imageName: PropTypes.string.isRequired,
};

export default ImageGallery;
