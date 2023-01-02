import React, { useState } from "react";
import "./DisplayCategory.css";
import { v4 as uuidv4 } from "uuid";

const DisplayCategory = (props) => {
  const [categories, setCategories] = useState({
    catgoryID: 0,
    categoryName: "",
    numberOfPeople: "",
    ParentCategorId: 0,
    items: [],
  });

  const subCategoryHandler = (e) => {
    setCategories({ ...categories, categoryName: e.target.value });
    console.log(categories.categoryName);
  };

  const noOfPeopleHandler = (e) => {
    setCategories({ ...categories, numberOfPeople: e.target.value });
    console.log(categories.numberOfPeople);
  };
  return (
    <div className="subCategory">
      <div className="main_category">
        <div>
          {props.allCategories.map((item) => {
            return (
              <>
                <div key={uuidv4()} className="main">
                  {item.categoryName}, {item.numberOfPeople} {"people"} &nbsp;
                  <span>Edit</span> &nbsp;
                  <span>Delete</span> &nbsp;
                  <span>Move Up</span> &nbsp;
                  <span>Move Down</span> &nbsp;
                </div>
                <div key={uuidv4()} className="subcategory">
                  <input
                    key={uuidv4()}
                    type="text"
                    className="search_list__items"
                    placeholder="Search to add items"
                    onClick={() => console.log("entered")}
                  />
                </div>
                <div className="subcategory">
                  {props.allCategories1.map((item) => {
                    return (
                      <>
                        <div>
                          {item.categoryName1}, {item.numberOfPeople1},{" "}
                          {"people"} &nbsp;
                          <span>Edit</span> &nbsp;
                          <span>Delete</span> &nbsp;
                          <span>Move Up</span> &nbsp;
                          <span>Move Down</span> &nbsp;
                        </div>
                        <div key={uuidv4()}>
                          <input
                            key={uuidv4()}
                            type="text"
                            className="search_list__items"
                            placeholder="Search to add items"
                            onClick={() => console.log("entered")}
                          />
                        </div>
                        <div key={uuidv4()}>
                          <input
                            key={uuidv4()}
                            type="text"
                            className="search_list__items"
                            placeholder="Sub Category name"
                            value={categories.categoryName}
                            onChange={subCategoryHandler}
                          />
                          <input
                            key={uuidv4()}
                            type="number"
                            className="search_list__items"
                            placeholder="Number of People"
                            onChange={noOfPeopleHandler}
                          />
                        </div>
                      </>
                    );
                  })}
                </div>
                <div key={uuidv4()} className="subcategory">
                  <input
                    key={uuidv4()}
                    type="text"
                    className="search_list__items"
                    placeholder="Sub Category name"
                    value={categories.categoryName}
                    onChange={subCategoryHandler}
                  />
                  <input
                    key={uuidv4()}
                    type="number"
                    className="search_list__items"
                    placeholder="Number of People"
                    onChange={noOfPeopleHandler}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DisplayCategory;
