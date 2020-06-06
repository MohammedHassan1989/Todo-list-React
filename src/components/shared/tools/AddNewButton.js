import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./AddNewButton.css";
function AddNewButton(props) {
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
    <div className="row ">
      <div className="fixed-bottom-par" style={{ fontSize: props.size }}>
        <animated.div
          onMouseOver={AddNewButtonHoverTrigger}
          onMouseLeave={AddNewButtonLeaveTrigger}
          style={AddNewButtonProps}
        >
          <i className="fas fa-plus-circle"></i>
        </animated.div>
      </div>
    </div>
  );
}

export default AddNewButton;
