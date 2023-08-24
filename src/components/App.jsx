import React, { Component } from 'react';
import { Counter } from './counter/Counter.js';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Counter
          good={good}
          neutral={neutral}
          bad={bad}
          onLeaveFeedback={this.handleLeaveFeedback}
        />
      </div>
    );
  }
}
