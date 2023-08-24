import React, { Component } from 'react';
import { FeedbackOptions } from '../feedback/FeedbackOptions';
import { Statistics } from '../statistics/Statistics';
import { Section } from '../section/Section';
import { Notification } from '../notification/Notification';

export class Counter extends Component {
  render() {
    const { good, neutral, bad, onLeaveFeedback } = this.props;
    const total = good + neutral + bad;
    const positivePercentage = total === 0 ? 0 : Math.round((good * 100) / total);
    const feedbackOptions = Object.keys({ good, neutral, bad });

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={feedbackOptions} onLeaveFeedback={onLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
