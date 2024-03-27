import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title, children } = this.props;
    return (
      <section className={css.sectionContainer}>
        {title}
        {children}
      </section>
    );
  }
}

export default Section;
