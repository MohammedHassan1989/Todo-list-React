import React from "react";
import { useSpring, animated } from "react-spring";
import RemoveButton from "../../shared/tools/RemoveButton";
import "./Activities.css";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function ActivityCard() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: {
      mass: 5,
      tension: 350,
      friction: 40,
    },
  }));
  return (
    <>
      <div className="">
        <animated.div
          className="note-card instructions paper shadow  mb-3"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        >
          <a href="#" className="page-header">
            <RemoveButton width={25} height={25} />
          </a>
          {/* <div className="page-header">
            <img
              width="25"
              height="25"
              className="delete-img"
              src={require("../../../utility/images/icons/delete.png")}
            />
          </div> */}
          <div className="row">
            <div className="col-1">
              <a href="#">
                <img
                  width="20"
                  height="20"
                  src={require("../../../utility/images/icons/light-open.png")}
                />
              </a>
            </div>
            <div className="col-10">
              <p className="note-title">Title</p>
            </div>
          </div>
          <p className="note-body">
            description description description description description
            description
          </p>
          <div className="row">
            <div className="col-9">
              <div className="note-footer">
                <a href="#">Is this task Done?</a>
              </div>
            </div>
            <div className="col-2">
              <div className="note-footer">
                <img
                  width="30"
                  height="30"
                  src={require("../../..//utility/images/icons/done.png")}
                />
              </div>
            </div>
          </div>
          ​
        </animated.div>
      </div>
    </>
  );
}
export default ActivityCard;
