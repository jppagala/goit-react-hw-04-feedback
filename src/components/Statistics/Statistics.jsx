import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

class Statistics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { good, neutral, bad } = this.props;
    const { total, positivePercentage } = this.props;

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
  }
}

export default Statistics;
