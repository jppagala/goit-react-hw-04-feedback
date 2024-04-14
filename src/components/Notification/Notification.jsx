import React from 'react';
import PropTypes from 'prop-types';
import css from './Notification.module.css';

const Notification = ({ title }) => {
  return (
    <div className={css.notificationContainer}>
      <p className={css.notification}>{title}</p>
    </div>
  );
};

Notification.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Notification;
