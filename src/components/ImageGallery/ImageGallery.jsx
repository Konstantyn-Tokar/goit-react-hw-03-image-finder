import { Component } from "react";
import ImageGalleryList from "./ImageGalleryList";

const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = `3d673b2d8e40eafc68577fae5a6a1f4b`;
const MOVIE_BY_SEARCH = `${BASE_URL}/search/movie?api_key=${API_KEY}&include_adult=false`;

class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;

    if (prevName !== nextName) {
      this.setState({ loading: false });
      fetch(
        `${MOVIE_BY_SEARCH}&query=${this.props.imageName}&page=${this.state.page}`
      )
        .then((response) => response.json())
        .then((data) => this.setState({ images: data.results }))
        .finally(() => this.setState({ loading: true }));
    }
  }

  onLoadMore = () => {
    const { page } = this.state;
    this.setState({ page: page + 1 });
  };

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
