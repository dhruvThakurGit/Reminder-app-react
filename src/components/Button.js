import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  // would write this if all buttons had same onClick function
  // const onClick = (event) => {
  //     console.log(event)
  // }

  const btnStyle = {
    backgroundColor: color,
  };

  return (
    <button style={btnStyle} className="btn" onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  //   onClick: PropTypes.func.isRequired,
};

export default Button;
