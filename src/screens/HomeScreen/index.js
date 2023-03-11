import React from "react";

import SearchInput from "./components/SearchInput";

const HomeScreen = () => {
  const onSearch = () => {};
  return (
    <main>
      <div className="relative px-6 py-5 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="sm:mb-8 sm:flex sm:justify-center">
            <SearchInput onSubmit={onSearch} />
          </div>
        </div>
        <div className="mx-auto max-w-2xl">
          <div className="sm:mb-8 sm:flex sm:justify-center">Home</div>
        </div>
      </div>
    </main>
  );
};

export default HomeScreen;
