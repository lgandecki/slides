// App.js
import './Picture.js';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>NASA Picture of the Day</h1>
        ...
        <Picture />
      </div>
    )
  }
}

// Picture.js
class Picture extends React.Component {
  render() {
    <div>
        <h2> ? </h2>
        <img src= ? />
        <p> ? </p>
      </div>
  }
}
