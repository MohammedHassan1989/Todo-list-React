import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import RemoveButton from "../../shared/tools/RemoveButton";
import "./Categories.css";

function Category(props) {
  const [categoryState, categoryToggle] = useState(false);

  const categoryProps = useSpring({
    transform: categoryState ? "translateY(-10px)" : "translateY(0px)",
    //opacity: categoryState ? 1 : 0,
    from: {
      transform: categoryState ? "translateY(-10px)" : "translateY(0px)",
    },
  });
  function itemHoverTrigger() {
    categoryToggle(true);
  }
  function itemLeaveTrigger() {
    categoryToggle(false);
  }

  return (
    <>
      <animated.div
        onMouseOver={itemHoverTrigger}
        onMouseLeave={itemLeaveTrigger}
        style={categoryProps}
      >
        <div className="categories-container">
          <div className="item-container  shadow mb-5">
            <a
              href="#"
              onClick={() => props.deleteCategory(props.category.categoryid)}
              className="page-header"
            >
              <RemoveButton width={12} height={12} />
            </a>

            <div className="item-body">
              <a>
                {props.category.categoryName} ({props.category.activitiesCount})
              </a>
            </div>
          </div>
        </div>
      </animated.div>
    </>
  );
}

export default Category;
