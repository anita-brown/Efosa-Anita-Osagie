import React, { useState } from "react";
import "./SearchBar.css";
import { BsSearch } from "react-icons/bs";
import { a } from "../data";

const SearchBar = ({ placeholder }) => {
    
  const [inputValue, setInputValue] = useState("");
  const [path, setPath] = useState("");
  const [display, setDisplay] = useState(false);

  const value = () => {
    if (path === "") {
      return " ";
    } else if (path === undefined) {
      return "No path found";
    } else {
      return path;
    }
  };
  const handleClick = () => {
    let newValue = cleanInputValue(inputValue);
    let searchResult = pathGet(a, newValue);
    if (newValue === "") {
      setPath("");
    } else {
      setPath(searchResult);
    }
    setDisplay(true);
  };
  const handleChange = (e) => {
    const searchQuery = e.target.value;
    setInputValue(searchQuery);
    if (!searchQuery) {
      setPath("");
    }
    setDisplay(false);
  };
  return (
    <div className="search">
      <div className="search-input">
        <input type="search" placeholder={placeholder} value={inputValue} onChange={handleChange} />
        <div className="search-icon" onClick={handleClick}>
          <BsSearch />
        </div>
      </div>
      {display ? (
        <div className="input-result">
          <p>
            <em>{value()}</em>
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBar;
