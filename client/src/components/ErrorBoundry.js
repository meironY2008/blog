import React, { Component } from "react";

export default class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    return (
      <div>
        {this.state.hasError ? (
            <div>
          <img
            src="https://i.giphy.com/media/ihISG3ZYUXZle/giphy.webp"
            width="480"
            height="368"
          />
          </div>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}
