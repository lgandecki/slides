// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Image,
  Slide,
  Text,
  Code,
  CodePane,
} from "spectacle"

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


// const images = {
//   city: require("../assets/city.jpg"),
//   kat: require("../assets/kat.png"),
//   logo: require("../assets/formidable-logo.svg"),
//   markdown: require("../assets/markdown.png")
// };

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#00BDEB",
  tertiary: "#eb7f00",
  text: "#012832",
  light: "#aaa"
}, {
  primary: "Muli"
});

const code = {
  arrowFunctions: require("!!raw-loader!../assets/codesnippets/ES6/ArrowFunctions.js"),
  objectDestructuring: require("!!raw-loader!../assets/codesnippets/ES6/ObjectDestructuring.js"),
  stringInterpolation: require("!!raw-loader!../assets/codesnippets/ES6/StringInterpolation.js"),
  classes: require("!!raw-loader!../assets/codesnippets/ES6/Classes.js"),
  reactWebsite: require("!!raw-loader!../assets/codesnippets/react/reactWebsite.js"),
  basicSandbox: require("!!raw-loader!../assets/codesnippets/react/basicSandbox.js"),
  tags: require("!!raw-loader!../assets/codesnippets/react/tags.js"),
  basicComponent: require("!!raw-loader!../assets/codesnippets/react/basicComponent.js"),
  appWithChildren: require("!!raw-loader!../assets/codesnippets/react/appWithChildren.js"),
  functionalApp: require("!!raw-loader!../assets/codesnippets/walk/functionalApp.js"),
  classApp: require("!!raw-loader!../assets/codesnippets/walk/classApp.js"),
  twoTypesOfComponents: require("!!raw-loader!../assets/codesnippets/walk/twoTypesOfComponents.js"),
  appRemainingComponents: require("!!raw-loader!../assets/codesnippets/walk/appRemainingComponents.js"),
  addCSS: require("!!raw-loader!../assets/codesnippets/walk/addCSS.js"),
  addPicture: require("!!raw-loader!../assets/codesnippets/walk/addPicture.js"),
  data: require("!!raw-loader!../assets/codesnippets/walk/data.js"),
  nasaAPI: require("!!raw-loader!../assets/codesnippets/walk/nasaAPI.js"),
  state: require("!!raw-loader!../assets/codesnippets/walk/state.js"),
  appWithState: require("!!raw-loader!../assets/codesnippets/walk/appWithState.js"),
  pictureWithFetch: require("!!raw-loader!../assets/codesnippets/walk/pictureWithFetch.js"),
  fetching: require("!!raw-loader!../assets/codesnippets/walk/fetching.js"),
}

const images = {
  techknowDay: require("../assets/images/techknowday.png"),
  reactWebsite: require("../assets/images/react-website.jpg"),
  reactWebsiteComponents: require("../assets/images/react-website-components.jpg"),
  reactWebsiteAppComponent: require("../assets/images/react-website-app-component.jpg"),
  renderAppToRoot: require("../assets/images/renderAppToRoot.jpg"),
  trainers: require("../assets/images/trainers/trainers.jpg"),
  nasaPOD: require("../assets/images/nasaPOD.jpg"),
  startingPoint: require("../assets/images/walk/startingPoint.jpg"),
  moveAppResult: require("../assets/images/walk/moveAppResult.jpg"),
  props: require("../assets/images/walk/props.jpg"),
  propsButton: require("../assets/images/walk/propsButton.jpg"),
  lifecycleMounting: require("../assets/images/walk/lifecycleMounting.jpg"),
  lifecycleUpdating: require("../assets/images/walk/lifecycleUpdating.jpg"),
  lifecycleUnmounting: require("../assets/images/walk/lifecycleUnmounting.jpg"),
  planApp: require("../assets/images/walk/planApp.jpg"),
  planPicture: require("../assets/images/walk/planPicture.jpg"),
  query: require("../assets/images/walk/query.jpg"),
  youareawesome: require("../assets/images/walk/youareawesome.gif"),

}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>

        {/* Waiting / Starting slide */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} lineHeight={1.5} textColor="secondary">
            React Introduction
          </Heading>

          <Image width="100%" src={images.techknowDay} />
        </Slide>

        {/* Meet your trainers */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} lineHeight={1.5} textColor="secondary">
            Trainers
          </Heading>
          <Image width="100%" src={images.trainers} />
        </Slide>


        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} lineHeight={1.5} textColor="secondary">
            What we will do today:
          </Heading>
          <List>
            <ListItem textColor='text' bold>Intro</ListItem>
            <ListItem textColor='text' bold>ES6</ListItem>
            <ListItem textColor='text' bold>NASA Picture of the day</ListItem>
          </List>
        </Slide>

        {/* Why React */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} lineHeight={1.5} textColor="secondary">
            React - 92% satisfaction
          </Heading>
          <Heading size={6} lineHeight={1.5} textColor="secondary">
            State of Javascript 2016 survey
          </Heading>
          <List>
            <ListItem textColor='text' bold>2011 - created by Jordan Walke</ListItem>
            <ListItem textColor='text' bold>2013 - open source</ListItem>
            <ListItem textColor='text' bold>2017 - MIT licence</ListItem>
          </List>
        </Slide>

        {/* ES6 - Functions */}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.arrowFunctions}
          ranges={[
            { loc: [0, 4], title: "Functions" },
            { loc: [0, 9], title: "Functions - New syntax" },
            { loc: [5, 12], title: "Skip curly braces" },
            { loc: [10, 15], title: "One argument" },
          ]}
        />

        {/* ES6 - Destructuring */}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.objectDestructuring}
          ranges={[
            { loc: [0, 10], title: "Destructuring" },
            { loc: [10, 19], title: "Destructuring - New syntax" },
            { loc: [20, 23], title: "Shorter" },
          ]}
        />

        {/* ES6 - String interpolation */}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.stringInterpolation}
          ranges={[
            { loc: [0, 4], title: "String interpolation" },
            { loc: [5, 8], title: "New syntax" },
          ]}
        />

        {/* ES6 - Classes */}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.classes}
          ranges={[
            { loc: [0, 10], title: "Classes" },
            { loc: [11, 22], title: "Extending the class" },
          ]}
        />

        {/* Typical reactjs.org website */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">
            A typical website ...
          </Heading>
          <Image width="100%" src={images.reactWebsite} />
        </Slide>

        {/* reactjs.org website with components */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">
            ... is built with components ...
          </Heading>
          <Image width="100%" src={images.reactWebsiteComponents} />
        </Slide>

        {/* reactjs.org website with components wrapped in an App component */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">
            ... that are wrapped in an App component
          </Heading>
          <Image width="100%" src={images.reactWebsiteAppComponent} />
        </Slide>

        {/* App has children */}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.appWithChildren}
          ranges={[
            { loc: [0, 14], title: "App has 👩‍👧‍👦" },
            { loc: [0, 14], title: "App has 👩‍👧‍👦" },
          ]}
        />

        {/* Components instead of tags */}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.tags}
          ranges={[
            { loc: [0, 5], title: "HTML tags" },
            { loc: [6, 11], title: "React components" },
          ]}
        />

        {/* Components instead of tags */}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.basicComponent}
          ranges={[
            { loc: [0, 8], title: "JSX and children" },
            { loc: [0, 8], title: "JSX and children" },
          ]}
        />

        {/* Move App result */}
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={4} textColor="primary">
            Every component receives props
          </Heading>
          <Image width="100%" src={images.props} />
        </Slide>

        {/* How React renders App */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary">
            App component rendered inside "root"
          </Heading>
          <Image width="100%" src={images.renderAppToRoot} />
        </Slide>

        {/* NASA POD */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} textColor="secondary">
            NASA Picture of the Day
          </Heading>
          <Image width="100%" src={images.nasaPOD} />
        </Slide>

        {/* Let's get hands dirty */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary" fontWeight="bold">
            Coding time!
          </Heading>
          <List>
            <ListItem textColor='text' bold>codesandbox.io</ListItem>
            <ListItem textColor='text' bold>REACT EDITOR</ListItem>
            <ListItem textColor='text' bold>Sign in with Github</ListItem>
            <ListItem textColor='text' bold>Delete Hello.js</ListItem>
            <ListItem textColor='text' bold>Change index.js</ListItem>
          </List>
        </Slide>

        {/* Starting point - index.js */}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.basicSandbox}
          ranges={[
            { loc: [0, 8], title: "index.js" },
            { loc: [0, 8], title: "index.js" },
          ]}
        />

        {/* Starting Point */}
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={4} textColor="primary">
            Starting Point
          </Heading>
          <Image width="100%" src={images.startingPoint} />
        </Slide>

        {/* Move App to separate file */}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.functionalApp}
          ranges={[
            { loc: [0, 7], title: "App.js" },
            { loc: [8, 14], title: "index.js" },
          ]}
        />

        {/* Move App result */}
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={4} textColor="primary">
            App component in separate file
          </Heading>
          <Image width="100%" src={images.moveAppResult} />
        </Slide>

        {/* Two types of components */}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.twoTypesOfComponents}
          ranges={[
            { loc: [0, 3], title: "Functional components" },
            { loc: [4, 16], title: "Class components" },
          ]}
        />

        {/* Add Navigation */}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.appRemainingComponents}
          ranges={[
            { loc: [0, 14], title: "Add navigation" },
            { loc: [15, 24], title: "Add navigation" },
            { loc: [25, 34], title: "Button component with props" },
            { loc: [35, 44], title: "destructured props" },
          ]}
        />

        {/* Let's check again the props slide */}
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={4} textColor="primary">
            Every component receives props
          </Heading>
          <Image width="100%" src={images.propsButton} />
        </Slide>

        {/* Add ready styles - App.css */}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.addCSS}
          ranges={[
            { loc: [0, 2], title: "Create App.css" },
            { loc: [3, 15], title: "Add App.css" },
          ]}
        />

        {/* Add Picture component */}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.addPicture}
          ranges={[
            { loc: [0, 14], title: "Add Picture component" },
            { loc: [15, 25], title: "Create Picture component" },
          ]}
        />

        {/* data.js */}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.data}
          ranges={[
            { loc: [0, 7], title: "Copy data content into data.js" },
            { loc: [8, 10], title: "import data.js into Picture.js" },
            { loc: [11, 24], title: "import data.js into Picture.js" },
          ]}
        />

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary" fontWeight="bold">
            Get your API key from NASA
          </Heading>
          <List>
            <ListItem textColor='text' bold>api.nasa.gov</ListItem>
            <ListItem textColor='text' bold>Apply for an api key</ListItem>
            <ListItem textColor='text' bold>Save your key in Picture.js</ListItem>
          </List>
        </Slide>

        {/* NASA API key*/}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.nasaAPI}
          ranges={[
            { loc: [0, 8], title: "Store your API key in Picture.js" },
            { loc: [0, 8], title: "Store your API key in Picture.js" },
          ]}
        />

        {/* State */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary" fontWeight="bold">
            State
          </Heading>
          <List>
            <ListItem textColor='text' bold>Local component's storage</ListItem>
            <ListItem textColor='text' bold>Only in class components</ListItem>
            <ListItem textColor='text' bold>Initialised in constructor </ListItem>
            <ListItem textColor='text' bold>this.setState(...) to mutate state</ListItem>
          </List>
        </Slide>

        {/* class with state */}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.state}
          ranges={[
            { loc: [0, 12], title: "Initialise state in constructor" },
            { loc: [13, 25], title: "ES2015+ way" },
          ]}
        />

        {/* Lifecycle Mounting methods */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary" fontWeight="bold">
            Lifecycle of component
          </Heading>
          <Image width="100%" src={images.lifecycleMounting} />
        </Slide>

        {/* Lifecycle Update methods */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary" fontWeight="bold">
            Lifecycle of component
          </Heading>
          <Image width="100%" src={images.lifecycleUpdating} />
        </Slide>

        {/* Lifecycle Unmount methods */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary" fontWeight="bold">
            Lifecycle of component
          </Heading>
          <Image width="100%" src={images.lifecycleUnmounting} />
        </Slide>

        {/* Plan the App */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary" fontWeight="bold">
            Plan
          </Heading>
          <Image width="100%" src={images.planApp} />
        </Slide>

        {/* Plan the Picture */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary" fontWeight="bold">
            Plan
          </Heading>
          <Image width="100%" src={images.planPicture} />
        </Slide>

        {/* add logic to App.js */}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.appWithState}
          ranges={[
            { loc: [0, 11], title: "Add dateToText() function" },
            { loc: [12, 19], title: "Initialise state in constructor" },
            { loc: [20, 31], title: "Button onClick function" },
            { loc: [32, 38], title: "Button onClick" },
            { loc: [39, 53], title: "Start implementing event handlers" },
            { loc: [54, 63], title: "Create a dateChangeDirection object" },
            { loc: [64, 80], title: "Add onDateChange() function" },
            { loc: [81, 93], title: "Implement onDateChange() function" },
            { loc: [94, 108], title: "Display date from state" },
          ]}
        />

        {/* add logic to Picture.js */}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.pictureWithFetch}
          ranges={[
            { loc: [0, 9], title: "Pass date to Picture" },
            { loc: [10, 19], title: "Create Picture's state" },
          ]}
        />

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary" fontWeight="bold">
            Query
          </Heading>
          <Image width="100%" src={images.query} />
        </Slide>

        {/* fetchin data */}
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.fetching}
          ranges={[
            { loc: [0, 13], title: "Create query" },
            { loc: [14, 26], title: "Fetch data and store in state" },
            { loc: [27, 42], title: "Add lifecycle functions" },
            { loc: [43, 50], title: "Replace where the data comes from" },
          ]}
        />

        {/* Thank you! */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary" fontWeight="bold">
            Thank You! You are ✨✨✨ awesome ✨✨✨
          </Heading>
          <Image width="40%" src={images.youareawesome} />
        </Slide>


      </Deck>
    );
  }
}
