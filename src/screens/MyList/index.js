import React, { useEffect, useMemo, useState } from "react";
import debounce from "lodash.debounce";

import SearchInput from "./components/SearchInput";
import MovieCard from "../../components/Cards/MovieCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MyList = () => {
  const [searchText, setSearchText] = useState("");
  const { items } = useSelector((state) => state.myList);

  const debouncedResults = useMemo(() => {
    return debounce((text) => setSearchText(text), 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  const sortOptions = [
    "release_date.asc",
    "popularity.asc",
    "revenue.asc",
    "vote_average.asc",
    "vote_average.desc",
  ];

  return (
    <main>
      {/* <div className="flex flex-row my-4">
        <div className="mx-auto w-3/4">
          <SearchInput text={searchText} onSubmit={debouncedResults} />
        </div>
      </div> */}
      {console.warn(items)}
      <div className="relative px-6 lg:px-8">
        {/* {!!searchText.length && (
          <>
            <div className="mx-auto max-w-xxl pb-5 text-xl flex flex-row justify-center">
              Showing results for: <strong>{searchText}</strong>
              <span
                onClick={() => setSearchText("")}
                className="ml-4 inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 grid place-items-center"
              >
                Clear
              </span>
            </div>
            <div className="mx-auto max-w-xxl pb-5">
              <div className="grid gap-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {searchQuery.isSuccess &&
                  searchQuery.data.results?.map((movieItem, key) => (
                    <MovieCard key={key} {...movieItem} />
                  ))}
              </div>
            </div>
          </>
        )} */}
        {items?.length > 0 ? (
          <>
            <div className="mx-auto max-w-xxl pt-5">
              <div className="grid gap-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {items.map((movieItem, key) => (
                  <MovieCard isListScreen={true} key={key} {...movieItem} />
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="mx-auto max-w-xxl pt-5 flex flex-row justify-center">
            No Items,{" "}
            <span className="text-blue-500">
              <Link to={"/"}>Discover</Link>
            </span>
          </div>
        )}
      </div>
    </main>
  );
};

export default MyList;
