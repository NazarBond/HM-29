import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filterSlice";
import "./SearchBox.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className="search-box">
      <label className="search-label">
        Пошук контактів за ім'ям
        <input
          className="search-input"
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Введіть для пошуку..."
        />
      </label>
    </div>
  );
};

export default SearchBox;
