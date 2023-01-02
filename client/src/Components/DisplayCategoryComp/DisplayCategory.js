import React, { useState } from "react";
import "./DisplayCategory.css";
import { v4 as uuidv4 } from "uuid";

const DisplayCategory = (props) => {
  const [categoryName, setCategoryName] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");

  const [categoryArray, setCategoryArray] = useState([]);
  const [peopleArray, setPeopleArray] = useState([]);

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
    }
  };
  return (
    <>
      <div className="subCategory">
        <div className="main_category">
          {props.categoryArray.map((item) => {
            return <strong key={uuidv4()}>{item}</strong>;
          })}
          ,{" "}
          {props.peopleArray.map((item) => {
            return <strong key={uuidv4()}>{item}</strong>;
          })}
          &nbsp; &nbsp;
          <span>Edit</span>
          &nbsp;
          <span>Delete</span>
          &nbsp;
          <span>Move Up</span>
          &nbsp;
          <span>Move Down</span>
          <div className="search_list">
            <input
              className="dropdown-btn search_list__items"
              placeholder="Search to add Items"
            />
          </div>
          <div>
            {categoryArray},{peopleArray}
          </div>
          <div className="menupage-list" onKeyDown={keyDownHandler}>
            <input
              type="text"
              className="menupage_list__items"
              placeholder="Sub Category name"
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
    </>
  );
};

export default DisplayCategory;
