import React, { Component } from 'react';
import css from './App.module.css';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const goodCount = this.state.good;
    const totalFeedback = this.countTotalFeedback();

    if (totalFeedback == 0) {
      return 0;
    }
    return Math.round((goodCount / totalFeedback) * 100);
  };

  feedbackClicked = feedback => {
    this.setState(prevState => ({
      ...prevState,
      [feedback]: prevState[feedback] + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    const options = this.state;
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();

    return (
      <div className={css.appContainer}>
        <Section title={' Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.feedbackClicked}
          />
        </Section>
        <Section title={'Statistics'}>
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification title={'No feedback given'} />
          )}
        </Section>
      </div>
    );
  }
}

{
  /* <Section>
  <FeedbackOptions options={} onLeaveFeedback={}/>
  {total > 0 ? <Statistics good={} neutral={} bad={} total={}{' '}
        positivePercentage={}/> : <Notification />}
</Section>; */
}

export default App;
