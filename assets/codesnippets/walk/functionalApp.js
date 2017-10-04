// Create App.js
import React from "react";

const App = () =>
  <h1>NASA Picture of the Day</h1>

export default App;

// index.js
import React from "react";
import { render } from "react-dom";
import App from "./App";

render(<App />, document.getElementById("root"));
