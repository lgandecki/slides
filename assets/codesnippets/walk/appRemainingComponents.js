class App extends React.Component {
  render() {
    return (
      <div>
        <h1>NASA Picture of the Day</h1>
        <div>
          <Button>&lt;</Button>
          <span>2017-10-10</span>
          <Button>&gt;</Button>
        </div>
      </div>
    );
  }
}

// Button.js
import React from 'react'

const Button = ( ? ) =>
  <button>
    ?
  </button>

export default Button;

// Button.js
import React from 'react'

const Button = ( props ) =>
  <button>
    { props.children }
  </button>

export default Button;

// Button.js
import React from 'react'

const Button = ({ children }) =>
  <button>
    { children }
  </button>

export default Button;
