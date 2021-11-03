import { Component } from "react";
// import { ToastContainer } from "react-toastify";
import "./App.css";

import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";

class App extends Component {
  state = {
    imageName: "",
  };

  handleFormSumbit = (imageName) => {
    this.setState({ imageName });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSumbit} />
        <ImageGallery imageName={this.state.imageName} />
        {/* <ToastContainer /> */}
      </div>
    );
  }
}

export default App;
