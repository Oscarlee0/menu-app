import React from "react";

const Cat = ({ categories, filterItem }) => {
  return (
    <div className='btn-container'>
      {categories.map((item) => {
        return (
          <button
            className='btn'
            type='button'
            key={item}
            onClick={() => filterItem(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Cat;
