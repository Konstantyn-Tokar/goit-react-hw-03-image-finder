import { Component } from "react";
import { ImSearch } from "react-icons/im";
// import { toast } from "react-toastify";

// import s from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    imageName: "",
  };

  handleNameChange = (e) => {
    this.setState({ imageName: e.currentTarget.value.toLowerCase() });
  };

  handleSudmit = (e) => {
    e.preventDefault();
    if (this.state.imageName.trim() === "") {
      // toast.error("j[etnm");
      alert("пусто");
      return;
    }
    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: "" });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSudmit}>
          <button type="submit" className="SearchForm-button">
            <ImSearch />
            {/* <span className="SearchForm-button-label">Search</span> */}
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
