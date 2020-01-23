import React from "react";
import logo from "./logo.svg";

class ImageComponent extends React.Component {
  render() {
    return <img src={logo} className="App-logo" alt="logo" />;
  }
}

export default ImageComponent;
