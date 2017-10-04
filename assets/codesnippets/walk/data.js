// data.js
export const data = {
  title: "Concept Plane: Supersonic Green Machine",
  explanation: "What will passenger...",
  url: "https://apod.nasa.gov/apod/image/1710/greenmachine_nasa_960.jpg",
  date: "2017-10-10"
}

// Picture.js
import { data } from "./data"

// Picture.js
class Picture extends Component {
  render() {
    const { title, explanation, url } = data;
    return (
      <div>
        <h2>{title}</h2>
        <img src={url} alt={title} />
        <p>{explanation}</p>
      </div>
    );
  }
}
