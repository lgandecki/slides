class Picture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Title",
    }
  }

  render() {
    ...
  }
}

// ES2015+
class Picture extends Component {
  state = {
    title: "Title"
  }

  render() {
    return (
      <h1>{this.state.title}</h1>
    )
  }
}
