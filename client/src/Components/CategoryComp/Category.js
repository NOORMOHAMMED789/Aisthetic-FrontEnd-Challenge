import React, { useState } from "react";
import "./Category.css";
import DisplayCategory from "../DisplayCategoryComp/DisplayCategory";

const Category = () => {
  const [categoryName, setCategoryName] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");

  const [categoryArray, setCategoryArray] = useState([]);
  const [peopleArray, setPeopleArray] = useState([]);

  const [show, setShow] = useState(false);
  const itemChangeHandler = (e) => {
    setCategoryName(e.target.value);
  };

  const personsChangeHandler = (e) => {
    setNumberOfPeople(e.target.value);
  };

  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      setPeopleArray([...peopleArray, numberOfPeople]);
      setCategoryArray([...categoryArray, categoryName]);
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
              categoryArray={categoryArray}
              peopleArray={peopleArray}
            />
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
