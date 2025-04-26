import React from "react";

const CustomButton = ({
  text,
  color, 
  bgColor, 
  width,      
  height, 
  padding,
  onClick,
  marginLeft,
  borderRadius,
}) => {
  const classes = `${color} ${bgColor} ${width} ${height} ${padding} ${marginLeft} ${borderRadius} font-normal cursor-pointer transition duration-200`;

  return (
    <button className={classes} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
