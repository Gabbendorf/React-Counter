import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  onClick(e) {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick.bind(this)}>+1</button>
        <h1>{this.state.count}</h1>
      </div>
    )
  }
};

export { Counter }
