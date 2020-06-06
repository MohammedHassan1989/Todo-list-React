import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionType from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _categories = [];
class CategoryStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  getCategories() {
    return _categories;
  }

  getCategoryById(id) {
    return _categories.find((category) => category._id == id);
  }
}

const store = new CategoryStore();
dispatcher.register((action) => {
  switch (action.actionType) {
    case actionType.CREATE_CATEGORY:
      // _categories.push(action.category);
      _categories = [..._categories, action.category];
      store.emitChange();
      console.log("Save Load");
      console.log(_categories);
      break;

    case actionType.LOAD_CATEGORY:
      _categories = action.categories;
      store.emitChange();
      console.log("Store Load");
      console.log(_categories);
      break;
    case actionType.DELETE_CATEGORY:
      // let index = _categories.findIndex((s) => s.categoryid == action.id);
      // _categories.splice(index, 1);
      _categories = _categories.filter(
        (category) => category.categoryid !== action.id
      );
      store.emitChange();
      console.log("Delete Load");
      console.log(_categories);
      break;
  }
});
export default store;
