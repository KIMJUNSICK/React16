import React, { Component } from "react";

const MAX_NOVELS = 20;

const readNovel = (state, props) => {
  const { novels } = state;
  if (novels < MAX_NOVELS) {
    return {
      novels: novels + 1
    };
  } else {
    return null;
  }
};

class Controlled extends Component {
  state = {
    novels: 0
  };

  render() {
    const { novels } = this.state;
    return (
      <button onClick={this._handleClick}>{`I have read ${novels} ${
        novels === 1 ? "novel" : "novels"
      }`}</button>
    );
  }
  _handleClick = () => {
    this.setState(readNovel);
  };
}

class App extends Component {
  render() {
    return <Controlled />;
  }
}

export default App;
