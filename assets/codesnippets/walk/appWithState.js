// App.js add dateToText function
class App extends Component {

  dateToText = (date) => {
    ...
  }

  render() {
    ...
  }
}

// App.js
class App extends Component {
  state = {
    date: new Date()
  }
  ...
}

// App.js
class App extends Component {
  ...
  render() {
    return (
      <Button onClick={this.onDateDecrease}>&lt;</Button>
        ...
      <Button onClick={this.onDateIncrease}>&gt;</Button>
    )
  }
}

// Button.js
const Button = ({ onClick, children }) => (
  <button onClick={onClick}>
    {children}
  </button>
);

// App.js
class App extends Component {
  onDateIncrease = () => {

  }

  onDateDecrease = () => {

  }

  render() {
    ...
  }
}

// App.js
const dateChangeDirection = {
  increase: 1,
  decrease: -1
}

class App extends Component {
  ...
}

// App.js
class App extends Component {
  state = { ... }

  onDateIncrease = () => {
    this.onDateChange(
      dateChangeDirection.increase, this.state.date
    )
  }
  onDateDecrease = () => {
    this.onDateChange(
      dateChangeDirection.decrease, this.state.date
    )
  }
  ...
}

// App.js
class App extends Component {
  ...

  onDateChange = (direction, date) => {
    const newDate = new Date(date)
      .setDate( date.getDate() + direction )
    if (newDate <= new Date()) {
      this.setState({ date: new Date(newDate) });
    }
  }
}

// App.js
class App extends Component {
  ...

  render() {
    ...
    <div>
      <Button onClick={this.onDateDecrease}>&lt;</Button>
      <span>{this.dateToText(this.state.date)}</span>
      <Button onClick={this.onDateIncrease}>&gt;</Button>
    </div>
    ...
  }
}
