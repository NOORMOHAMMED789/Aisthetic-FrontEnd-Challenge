import React from "react";
import "./DisplayCategory.css";
import { v4 as uuidv4 } from "uuid";

const DisplayCategory = (props) => {
  return (
    <div className="subCategory">
      <div className="main_category">
        <div>
          {props.allCategories.map((item) => {
            return (
              <>
                <div key={uuidv4()}>
                  {item.categoryName}, {item.numberOfPeople} {"people"}
                </div>
                <div key={uuidv4()}>
                  <input
                    type="text"
                    className="search_list__items"
                    placeholder="Search to add items"
                  />
                </div>
                <div key={uuidv4()}>
                  <input
                    type="text"
                    className="search_list__items"
                    placeholder="Sub Category name"
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
