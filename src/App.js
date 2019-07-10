import React, { Component, Fragment } from "react";
import { createPortal } from "react-dom";

class Portals extends Component {
  render() {
    return createPortal(<Message />, document.getElementById("touchMe"));
  }
}

const Message = () => "I could touch you s-o-o-o-n . . .";

class ReturnString extends Component {
  render() {
    return "hello";
  }
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <Portals />
        <ReturnString />
      </Fragment>
    );
  }
}

export default App;
