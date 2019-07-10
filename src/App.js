import React, { Component, Fragment } from "react";
import { createPortal } from "react-dom";

const BoundaryHOC = ProtecedComponent =>
  class Boundary extends Component {
    state = {
      hasError: false
    };

    componentDidCatch = () => {
      this.setState({
        hasError: true
      });
    };

    render() {
      const { hasError } = this.state;
      if (hasError) {
        return <ErrorFallback />;
      } else {
        return <ProtecedComponent />;
      }
    }
  };

class ErrorMaker extends Component {
  state = {
    friends: ["junsik", "JEONGMIN", "hyoseon", "hyensu"]
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        friends: undefined
      });
    }, 2000);
  };

  render() {
    const { friends } = this.state;
    return friends.map(friend => ` ${friend} `);
  }
}

class Portals extends Component {
  render() {
    return createPortal(<Message />, document.getElementById("touchMe"));
  }
}

class ReturnString extends Component {
  render() {
    return "hello";
  }
}

const Message = () => "I could touch you s-o-o-o-n . . .";
const ErrorFallback = () => "Sorry something went wrong!";

const PPortals = BoundaryHOC(Portals);
const PErrorMaker = BoundaryHOC(ErrorMaker);
const PReturnString = BoundaryHOC(ReturnString);

class App extends Component {
  render() {
    return (
      <Fragment>
        <PPortals />
        <PErrorMaker />
        <PReturnString />
      </Fragment>
    );
  }
}

export default BoundaryHOC(App);
