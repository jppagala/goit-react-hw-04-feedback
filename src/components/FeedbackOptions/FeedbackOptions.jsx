import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbaclOptions.module.css';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options } = this.props;
    const clicked = this.props.onLeaveFeedback;
    // console.log(clicked);

    return (
      <div className={css.buttonsContainer}>
        <button
          type="button"
          className={css.feedbackButton}
          onClick={() => clicked('good')}
        >
          Good
        </button>
        <button
          type="button"
          className={css.feedbackButton}
          onClick={() => clicked('neutral')}
        >
          Neutral
        </button>
        <button
          type="button"
          className={css.feedbackButton}
          onClick={() => clicked('bad')}
        >
          Bad
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
