import React, { useState, useEffect } from "react";
import { Spring, Trail } from "react-spring/renderprops";
import Modal from "react-modal";

import Categories from "./Categories";
import ActivityAddEdit from "./ActivityAddEdit";
import ActivityCard from "./ActivityCard";
import AddNewButton from "../../shared/tools/AddNewButton";

//import { deleteCategoryApi, saveCategory } from ".././../../api/categoryApi";
import CategoryStore from "../../../stores/categoryStore";
import {
  loadategory,
  saveCategory,
  deleteCategory,
} from "../../../actions/categoryActions";
//import { getCategories } from ".././../../api/categoryApi";
import "./Activities.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",

    border: null,

    padding: "0",
    margin: "0",
    transform: "translate(-50%, -50%)",
  },
};
function Activities() {
  const [category, setCategory] = useState(CategoryStore.getCategories());
  const [activity, setActivity] = useState({
    id: null,
    title: "",
    description: "",
    isDone: "",
    isActive: "",
  });
  function handelChangeActivity({ target }) {
    setActivity({
      ...activity,
      [target.name]: target.value,
    });
  }
  // function handelChange({ target }) {
  //   setCategory({
  //     ...category,
  //     [target.name]: target.value,
  //   });
  // }

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const activityList = [
    { key: 0, obj: <ActivityCard /> },
    { key: 1, obj: <ActivityCard /> },
    { key: 2, obj: <ActivityCard /> },
    { key: 3, obj: <ActivityCard /> },
  ];

  useEffect(() => {
    CategoryStore.addChangeListener(onChange);
    if (category.length === 0) loadategory();
    console.log("useEffect");
    console.log(category);
    return () => CategoryStore.removeChangeListener(onChange);
    // getCategories().then((_categories) =>
    //   setCategory({ items: _categories, isLoaded: true })
    //);
  }, []);
  function onChange() {
    setCategory(CategoryStore.getCategories());
  }
  function pushNewCategory(obj) {
    CategoryStore.addChangeListener(onChange);
    saveCategory(obj).then(() => {
      return () => CategoryStore.removeChangeListener(onChange);
    });
  }
  return (
    <>
      <div className="position-absolute ">
        <div className="add-button-contanier" onClick={openModal}>
          <AddNewButton size={80} />
        </div>

        {/* onChange={handelChange}  */}
        <Categories
          category={category}
          pushNewCategory={pushNewCategory}
          deleteCategory={deleteCategory}
        />
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 700, duration: 600 }}
        >
          {(springProps) => (
            <div style={springProps}>
              <div className="row">
                <Trail
                  items={activityList}
                  keys={(item) => item.key}
                  from={{ transform: "translate3d(0,-100px,0)", opacity: 0 }}
                  to={{ transform: "translate3d(0,0px,0)", opacity: 1 }}
                  config={{ delay: 600 }}
                >
                  {(item) => (props, i) => (
                    <div className="col-4" style={props}>
                      {item.obj}
                    </div>
                  )}
                </Trail>

                {/* <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard /> */}
              </div>
            </div>
          )}
        </Spring>

        {/* onClick={openModal} */}
        {/* <div className="row">
        <div className="fixed-bottom-par">
          <i className="fas fa-plus-circle" onClick={openModal}></i>
        </div>
      </div> */}
        <div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <Spring
              from={{ opacity: 0, marginTop: -3000, top: "0%", left: "0%" }}
              to={{ opacity: 1, marginTop: 0, top: "50%", left: "50%" }}
              enter={{ opacity: 1, marginTop: 0, top: "50%", left: "50%" }}
            >
              {(springProps) => (
                <div style={springProps}>
                  <ActivityAddEdit
                    activity={activity}
                    onChange={handelChangeActivity}
                  />
                </div>
              )}
            </Spring>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default Activities;
