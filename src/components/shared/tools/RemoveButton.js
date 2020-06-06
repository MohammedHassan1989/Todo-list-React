import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function RemoveButton(props) {
  const [AddNewButtonState, AddNewButtonToggle] = useState(false);
  const AddNewButtonProps = useSpring({
    transform: AddNewButtonState
      ? "scale(1.2) rotate(90deg)"
      : "scale(1) rotate(0deg)",
    //opacity: AddNewButtonState ? 1 : 0,
    from: {
      transform: AddNewButtonState
        ? "scale(1.2) rotate(90deg)"
        : "scale(1) rotate(0deg)",
    },
  });

  function AddNewButtonHoverTrigger() {
    AddNewButtonToggle(true);
  }
  function AddNewButtonLeaveTrigger() {
    AddNewButtonToggle(false);
  }

  return (
    <animated.div
      onMouseOver={AddNewButtonHoverTrigger}
      onMouseLeave={AddNewButtonLeaveTrigger}
      style={AddNewButtonProps}
    >
      <img
        width={props.width}
        height={props.height}
        className="delete-img"
        src={require("../../../utility/images/icons/delete.png")}
      />
    </animated.div>
  );
}

export default RemoveButton;
