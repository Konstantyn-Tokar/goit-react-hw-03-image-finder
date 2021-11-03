import { Component } from "react";
import ImageGalleryList from "./ImageGalleryList";

const API_KEY = "24169553-082afd50aec2e2c887c16645d";
const BASE_URL = "https://pixabay.com/api/";

class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;

    if (prevName !== nextName) {
      this.setState({ loading: false });
      fetch(
        `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.props.imageName}&per_page=12&page=1&key=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => this.setState({ images: data.hits }))
        .finally(() => this.setState({ loading: true }));
    }
  }

  render() {
    return (
      <div>
        {this.state.images && (
          <ImageGalleryList imageslist={this.state.images} />
        )}
      </div>
    );
  }
}

export default ImageGallery;
