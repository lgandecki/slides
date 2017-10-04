// Create App.jsx

import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>NASA Picture of the Day</h1>
      </div>
    );
  }
}

export default App;

// index.js

import React from "react";
import { render } from "react-dom";
import App from "./App";

render(<App />, document.getElementById("root"));
