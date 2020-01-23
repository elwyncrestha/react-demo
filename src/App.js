import React from "react";
import "./App.css";
import ImageComponent from "./component/image.component";
import AboutComponent from "./component/about.component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageComponent />
        <AboutComponent name="Elvin Shrestha" />
      </header>
    </div>
  );
}

export default App;
