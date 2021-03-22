import { Button } from "@material-ui/core";
import React from "react";

function CustomButton(props) {
  return <Button variant="contained">{props.name}</Button>;
}

export default CustomButton;
