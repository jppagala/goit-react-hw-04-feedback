import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Notification.module.css';

class Notification extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title } = this.props;
    return (
      <div className={css.notificationContainer}>
        <p className={css.notification}>{title}</p>
      </div>
    );
  }
}

export default Notification;
