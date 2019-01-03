import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Input = props => {
  const { className, placeholder, type, name, onChange, value, id } = props;

  return (
    <input
      id={id}
      type={type}
      name={name}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
Input.propTypes = {
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  id: PropTypes.string.isRequired,
};
export default Input;
