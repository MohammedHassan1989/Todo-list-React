import React, { useState, useEffect } from "react";
import { useSpring } from "react-spring";
import { Spring, Trail, Transition } from "react-spring/renderprops";

import Category from "./Category";
import "./Categories.css";

function Categories(props) {
  const fadeInStyle = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -300 },
  });

  function AddnewCategory() {
    return (
      <div className="item-container shadow mb-5 ">
        <div className="item-body add-new-item">
          <input
            className="form-control input-xs"
            placeholder="Add New"
            value={props.category.categoryName}
            name="categoryName"
            type="text"
            onKeyDown={CreateCategory}
          />
        </div>
      </div>
    );
  }
  // const [category, setCategory] = useState({
  //   items: CategoryStore.getCategories(),
  //   isLoaded: false,
  // });

  // useEffect(() => {
  //   CategoryStore.addChangeListener(onChangeCategory);
  //   if (category.items.length === 0) loadategory();
  //   return () => CategoryStore.removeListener(onChangeCategory);
  // }, [category.length]);
  // function onChangeCategory() {
  //   setCategory({
  //     items: CategoryStore.getCategories(),
  //     isLoaded: true,
  //   });
  // }

  // function deleteCategory(id) {
  //   let index = props.category.items.categories.findIndex(
  //     (s) => s.categoryid == id
  //   );

  //   deleteCategoryApi(id)
  //     .then()
  //     .then(props.category.items.categories.splice(index, 1));
  // }
  function CreateCategory(e) {
    if (e.keyCode == 13) {
      let obj = { categoryName: e.target.value };
      props.pushNewCategory(obj);
    }
  }
  const categoriesList = [];

  //console.log(props.category.isLoaded);
  //if (props.category.isLoaded) {

  if (props.category)
    props.category.forEach((cat) => {
      categoriesList.push({
        key: cat.categoryid,
        obj: <Category category={cat} deleteCategory={props.deleteCategory} />,
      });
    });
  categoriesList.push({ key: 3, obj: <AddnewCategory /> });
  // }

  if (props.category) {
    return (
      <>
        <Spring
          from={{ opacity: 0, marginTop: -300 }}
          to={{ opacity: 1, marginTop: 0 }}
          config={{ delay: 400 }}
        >
          {(springProps) => (
            <div style={springProps}>
              <div className="card shadow mb-5 bg-white ">
                <div className="card-body">
                  <div className="text-danger">Errors</div>

                  <div className="row">
                    <Transition
                      items={categoriesList}
                      keys={(item) => item.key}
                      from={{
                        transform: "translate3d(0,-100px,0)",
                        opacity: 0,
                      }}
                      leave={{
                        transform: "translate3d(0,-100px,0)",
                        opacity: 0,
                      }}
                      enter={{
                        transform: "translate3d(0,0px,0)",
                        opacity: 1,
                      }}
                      config={{ delay: 600 }}
                    >
                      {(item) => (propss, i) => (
                        <div className="col-3" style={propss}>
                          {/* <Category /> */}
                          {item.obj}
                        </div>
                      )}
                    </Transition>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Spring>
      </>
    );
  } else {
    return <div>Loding...</div>;
  }
}

export default Categories;
{
  /* <div key={i + 20} className="item-container shadow mb-5 ">
  <div className="item-body add-new-item">
    <input
      className="form-control input-xs"
      placeholder="Add New"
      onChange={props.onChange}
      value={props.category.categoryName}
      name="categoryName"
      type="text"
    />
  </div>
</div>; */
}
