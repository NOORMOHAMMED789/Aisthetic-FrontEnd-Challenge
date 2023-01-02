import React, { useState } from "react";
import "./Category.css";
import DisplayCategory from "../DisplayCategoryComp/DisplayCategory";

const Category = () => {
  const [categories, setCategories] = useState({
    catgoryID: 0,
    categoryName: "",
    numberOfPeople: "",
    ParentCategorId: 0,
    items: [],
  });
  const [allCategories, setAllCategories] = useState([]);

  const [show, setShow] = useState(false);
  const itemChangeHandler = (e) => {
    setCategories({ ...categories, categoryName: e.target.value });
  };

  const personsChangeHandler = (e) => {
    setCategories({ ...categories, numberOfPeople: e.target.value });
  };

  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      setAllCategories([...allCategories, categories]);
      console.log(allCategories);
      setShow(true);
    }
  };
  return (
    <div>
      <div className="header">
        <h1 className="header__title">Menu</h1>
        <div className="menupage">
          {show && <DisplayCategory allCategories={allCategories} />}
          <div className="menupage-list" onKeyDown={keyDownHandler}>
            <input
              type="text"
              className="menupage_list__items"
              placeholder="Main Category name"
              onChange={itemChangeHandler}
              required
              autoFocus
            />
            <input
              type="number"
              className="menupage_list__items"
              placeholder="Number of People"
              onChange={personsChangeHandler}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
