import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  className,
  inputClass,
  onChange,
  type,
  name,
  id,
  label,
  error,
  children,
}) => (
  <div className={`form-group ${className}`}>
    {label && (<label htmlFor={id} className="form-group__label">{label}</label>)}
    <input className={inputClass} type={type} onChange={onChange} name={name} id={id} />
    {error && (<small className="form-group__error">{error}</small>)}
    {children}
  </div>
);

Input.propTypes = {
  className: PropTypes.string,
  inputClass: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
  children: PropTypes.element,
};

Input.defaultProps = {
  className: '',
  inputClass: '',
  type: 'text',
  label: '',
  error: '',
  children: <></>,
};

export default Input;
