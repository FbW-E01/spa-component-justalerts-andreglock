import React from "react";
import ReactDOM from "react-dom";

const Box = (props) => {

  const boxType = (color) => {
    switch (color) {
      case "blue":
        return 'primary';
      case "red":
        return 'danger';
      case "orange":
        return 'warning';
    }
  }

  const hide = (hidden) => {
    if (hidden) {
      return 'd-none';
    } else {
      return "";
    }
  }

  if (!props.hide) {
    console.log(props);
  }

  return (
    <div className={`alert alert-${boxType(props.type)} ${hide(props.hide)}`} role="alert">
      {props.message}
    </div>
  )
};

// Do not edit below this line
const jsx = <>
  <Box type="blue" message="Blue box" />
  <Box type="red" message="Red box" />
  <Box type="orange" message="Orange box" />
  <Box hide type="red" message="Hidden box" />
</>;
const element = document.getElementById("target");

ReactDOM.render(jsx, element);
