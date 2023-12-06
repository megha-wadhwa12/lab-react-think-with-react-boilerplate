// Iteration 1:

let container = document.getElementById("react-container");
// container.innerText = "Hello! Welcome to Javascript";

ReactDOM.render("Hello! Welcome to React",container);


// Iteration  2:

function reactContainer() {

  return React.createElement(
    "div", //tag_name
    { id: "h1-tag" }, //props(attributes) eg - id,className
    "Hey Kalvians! Welcome to React Learning",
    React.createElement("div", null, "Let's rock and roll") //children
  );
}

ReactDOM.render(reactContainer(), container);


// Iteration 3:

class KalvianContainer extends React.Component {
  render() {
    return React.createElement(
      "div", //tag_name
      { id: "h1-tag" }, //props(attributes) eg - id,className
      "Hey Kalvians",
      React.createElement("div", null, "Let's rock and roll with classes") //children
    );
  }
}

ReactDOM.render(React.createElement( KalvianContainer ), container);
