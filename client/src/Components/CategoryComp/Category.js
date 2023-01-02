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

  const [categories1, setCategories1] = useState({
    catgoryID1: 0,
    categoryName1: "",
    numberOfPeople1: "",
    ParentCategorId1: 0,
    items1: [],
  });
  const [allCategories, setAllCategories] = useState([]);
  const [allCategories1, setAllCategories1] = useState([]);

  const [show, setShow] = useState(false);

  const itemChangeHandler = (e) => {
    setCategories({ ...categories, categoryName: e.target.value });
  };

  const personsChangeHandler = (e) => {
    setCategories({ ...categories, numberOfPeople: e.target.value });
  };
  const item1ChangeHandler = (e) => {
    setCategories1({ ...categories1, categoryName1: e.target.value });
  };

  const persons1ChangeHandler = (e) => {
    setCategories1({ ...categories1, numberOfPeople1: e.target.value });
  };
  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      setAllCategories([...allCategories, categories]);
      console.log(allCategories);
      setShow(true);
    }
  };
  const keyDownHandler1 = (e) => {
    if (e.key === "Enter") {
      setAllCategories1([...allCategories1, categories1]);
      console.log(allCategories1);
      setShow(true);
    }
  };
  return (
    <div>
      <div className="header">
        <h1 className="header__title">Menu</h1>
        <div className="menupage">
          {show && (
            <DisplayCategory
              allCategories={allCategories}
              allCategories1={allCategories1}
            />
          )}

          {show && (
            <div className="menupage-list" onKeyDown={keyDownHandler1}>
              <input
                type="text"
                className="menupage_list__items"
                placeholder="Sub Category name"
                onChange={item1ChangeHandler}
                required
                autoFocus
              />
              <input
                type="number"
                className="menupage_list__items"
                placeholder="Number of People"
                onChange={persons1ChangeHandler}
                required
              />
            </div>
          )}
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
