import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { className, onClick, value, id } = props;

  return (
    <button
      id={id}
      className={className}
      type="submit"
      value={value}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
export default Button;
