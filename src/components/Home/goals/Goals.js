import React, { useState, useEffect } from "react";
import CategoryStore from "../../../stores/categoryStore";
import {
  loadategory,
  saveCategory,
  deleteCategory,
} from "../../../actions/categoryActions";
function Goals() {
  return (
    <div className="position-absolute w-100">
      <h1>Hi Goals</h1>
    </div>
  );
}

export default Goals;
