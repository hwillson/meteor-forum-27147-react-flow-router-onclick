import React, { Component } from 'react';

export default class Widgets extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const mouseClick = event.nativeEvent.which;
    if (mouseClick === 1) {
      console.log('Left mouse click - open modal ...');
    } else if (mouseClick === 3) {
      console.log('Right mouse click - open in new tab ...');
      window.open('https://meteor.com');
    }
  }

  render() {
    return (
      <div className="widgets">
        <a onClick={this.handleClick} onContextMenu={this.handleClick}>
          Some Link
        </a>
      </div>
    );
  }
};
