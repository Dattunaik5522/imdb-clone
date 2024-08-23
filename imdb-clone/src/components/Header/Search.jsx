import React, { useState, useEffect } from "react";
import "./Header.css";
// import useDebounce from "./useDebounce"; // Assuming you have a custom hook for debouncing

function SearchInput() {
  //   const [searchTerm, setSearchTerm] = useState("");
  //   const debouncedSearchTerm = useDebounce(searchTerm, 500); // Adjust the delay as needed

  //   useEffect(() => {
  //     // Implement your search logic here using debouncedSearchTerm
  //     console.log("Searching for:", debouncedSearchTerm);
  //   }, [debouncedSearchTerm]);

  return (
    <>
      <input
        type="text"
        className="input-button"
        // value={searchTerm}
        // onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <button className="search-button">Search</button>
    </>
  );
}

export default SearchInput;
