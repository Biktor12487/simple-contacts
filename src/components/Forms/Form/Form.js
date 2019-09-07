import React from 'react';
import PropTypes from 'prop-types';

const Form = ({
  onSubmit,
  children,
  className,
}) => (
  <form
    onSubmit={onSubmit}
    className={`form ${className}`}
  >
    {children}
  </form>
);
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

Form.defaultProps = {
  className: '',
};

export default Form;
