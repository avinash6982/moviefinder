import React from "react";

const SortOptionButton = ({ setSortOption, sortOptions }) => (
  <div className="flex content-center my-auto">
    <select
      onChange={(e) => setSortOption(e.target.value)}
      id="countries"
      className="bg-light border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
    > 
      {sortOptions.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default SortOptionButton;
