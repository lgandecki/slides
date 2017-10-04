// App.js
class App extends Component {
  ...

  render() {
    ...
    <Picture date={this.dateToText(this.state.date)} />
  }
}

// Picture.js
class Picture extends Component {
  state = {
    title: "",
    explanation: "",
    url: ""
  }
  ...
}
