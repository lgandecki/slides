// Picture.js
const API_KEY = "your_key";
const API = "https://api.nasa.gov/planetary/apod?";

class Picture extends Component {
  state = {...}

  fetchData = date => {
    const query = API + `date=${date}&api_key=${API_KEY}`;
  }

  render() {...}
}

// Picture.js
class Picture extends Component {
  ...

  fetchData = date => {
    const query = API + `date=${date}&api_key=${API_KEY}`;
    fetch(query)
      .then(response => response.json())
      .then(data => {
        this.setState({
          title: data.title,
          explanation: data.explanation,
          url: data.url
        });
      });
  };

  ...
}

// Picture.js
class Picture extends Component {
  ...
  componentDidMount() {
    this.fetchData(this.props.date);
  }

  componentWillReceiveProps(nextProps) {
    this.fetchData(nextProps.date);
  }

  fetchData = date => {...}
  render() {
    ...
  }
}

// Picture.js
class Picture extends Component {
  ...
  render() {
    const { title, explanation, url } = this.state;
  }
}
