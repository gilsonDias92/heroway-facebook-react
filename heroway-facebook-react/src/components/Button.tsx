import React from "react";
import * as ReactRedux from "react-redux";
import { changeColorAction } from "../redux/reducers/changeColor";
import { IAppState } from "../redux/configureStore";

function Button() {
  const dispatch = ReactRedux.useDispatch();
  const color = ReactRedux.useSelector((state: IAppState) => {
    return state.changeColor.color;
  });

  function clickMe() {
    const colors = ["green", "red", "purple", "brown"];
    const random = Math.floor(Math.random() * colors.length - 1);
    const currentColor = colors[random];
    const action = changeColorAction(currentColor);
    dispatch(action);
  }

  console.log(color);
  return (
    <button style={{ backgroundColor: color }} onClick={clickMe}>
      Click me
    </button>
  );
}

export default Button;
