import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.statisticsContainer}>
      <ul className={css.statisticsList}>
        <li className={css.statisticsItem}>Good: {good}</li>
        <li className={css.statisticsItem}>Neutral: {neutral}</li>
        <li className={css.statisticsItem}>Bad: {bad}</li>
        <li className={css.statisticsItem}>Total: {total}</li>
        <li className={css.statisticsItem}>
          Positive feedback: {positivePercentage}%
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
