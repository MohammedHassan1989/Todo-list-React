import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";
// import * as api from "../api/categoryApi";
import * as api from "../api/categoryApi";
export function saveCategory(categoryObj) {
  return api.saveCategory(categoryObj).then((savedCategory) => {
    console.log("After Save Action");
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_CATEGORY,
      category: savedCategory,
    });
  });
}
export function loadategory() {
  return api.getCategories().then((categories) => {
    console.log("Load Category ");
    console.log(categories.categories);
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_CATEGORY,
      categories: categories.categories,
    });
  });
}

export function deleteCategory(id) {
  return api.deleteCategoryApi(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_CATEGORY,
      id: id,
    });
  });
}
