import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

class Section extends Component {
  constructor(props) {
    super(props);
  }
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
