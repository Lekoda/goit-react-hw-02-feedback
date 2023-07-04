import React from 'react';
import css from './Feedback.module.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, bad, neutral } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <h1 className={css.title}>Please leave feedback</h1>
        <button
          type="button"
          className={css.btn}
          onClick={() => this.setState({ good: good + 1 })}
        >
          Good
        </button>
        <button
          type="button"
          className={css.btn}
          onClick={() => this.setState({ neutral: neutral + 1 })}
        >
          Neutral
        </button>
        <button
          type="button"
          className={css.btn}
          onClick={() => this.setState({ bad: bad + 1 })}
        >
          Bad
        </button>

        <p className={css.subtitle}>Statistics</p>
        <span className={css.text}>Good: {good}</span>
        <span className={css.text}>Neutral: {neutral}</span>
        <span className={css.text}>Bad: {bad}</span>

        <span className={css.text}>Total: {totalFeedback}</span>
        <span className={css.text}>Positive feedback:{positiveFeedback} %</span>
      </div>
    );
  }
}

export default Feedback;
