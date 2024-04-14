import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbaclOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={css.buttonsContainer}>
      <button
        type="button"
        className={css.feedbackButton}
        onClick={() => onLeaveFeedback('good')}
      >
        Good
      </button>
      <button
        type="button"
        className={css.feedbackButton}
        onClick={() => onLeaveFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        type="button"
        className={css.feedbackButton}
        onClick={() => onLeaveFeedback('bad')}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
