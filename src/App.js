import React, { Component, Fragment } from "react";

class ReturnString extends Component {
  render() {
    return "hello";
  }
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <ReturnString />
      </Fragment>
    );
  }
}

export default App;
