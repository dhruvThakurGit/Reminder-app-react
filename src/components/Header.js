import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ para1, onAdd, showTask }) => {
  /*declaring para1 to be used as a parameter in this function*/

  //describe event for each button here

  return (
    <header className="header">
      <h1>{para1}</h1>

      {useLocation().pathname === "/" && (
        <Button
          color={!showTask ? "Green" : "Black"}
          text={!showTask ? "Add Task" : "Show Tasks"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

// default value for parameters in Header
Header.defaultProps = {
  para1: "Deafult Value",
};

// setting type of parameteres given to header
Header.propTypes = {
  para1: PropTypes.string.isRequired,
};
// Will give error in console develper tools

// headingStyle
// const headingStyle = {
//   color : 'red',
//   backgroundColor : 'black'
// }

export default Header;
