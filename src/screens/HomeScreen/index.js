import React, { useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { CgSpinner } from "react-icons/cg";
import debounce from "lodash.debounce";

import SearchInput from "./components/SearchInput";
import MovieCard from "../../components/Cards/MovieCard";
import SortOptionButton from "./components/SortOptionButton";
import { fetchDiscover, searchResults } from "./api";
import Pagination from "../../components/Pagination";

const HomeScreen = () => {
  const [sortOption, setSortOption] = useState("release_date.asc");
  const [searchText, setSearchText] = useState("");
  const [searchPage, setSearchPage] = useState(1);
  const [discoverPage, setDiscoverPage] = useState(1);

  const discoverItemsQuery = useQuery(
    ["discover", sortOption, discoverPage],
    () => fetchDiscover({ sort_by: sortOption, page: discoverPage }),
    {
      onSuccess: () => {},
      onError: () => {},
      onSettled: () => {},
      select: (data) => data?.data,
    }
  );

  const searchQuery = useQuery(
    ["searchResults", searchPage],
    () => searchResults({ query: searchText, page: searchPage }),
    {
      onSuccess: () => {},
      onError: () => {},
      select: (data) => data?.data,
      enabled: searchText.length > 0,
    }
  );

  const debouncedResults = useMemo(() => {
    return debounce((text) => setSearchText(text), 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  useEffect(() => {
    searchQuery.refetch();
  }, [searchText]);

  const sortOptions = [
    "release_date.asc",
    "popularity.asc",
    "revenue.asc",
    "vote_average.asc",
    "vote_average.desc",
  ];

  return (
    <main>
      <div className="flex flex-row my-4">
        <div className="mx-auto w-3/4">
          <SearchInput text={searchText} onSubmit={debouncedResults} />
        </div>
      </div>
      <div className="relative px-6 lg:px-8">
        {searchQuery.isLoading ||
          (discoverItemsQuery.isLoading && (
            <div className="mx-auto flex flex-row justify-center">
              <CgSpinner className="animate-spin" />
            </div>
          ))}
        {!!searchText.length && searchQuery.isSuccess && (
          <>
            <div className="mx-auto max-w-xxl pb-5 text-xl flex flex-row justify-center">
              {searchQuery.data.results.length > 0 ? (
                <>
                  Showing results for: <strong>{searchText}</strong>
                </>
              ) : (
                <>
                  No Results found for key: <strong>{searchText}</strong>
                </>
              )}

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
            {searchQuery.data.page < searchQuery.data.total_pages && (
              <>
                <Pagination
                  currentPage={searchQuery.data.page}
                  maxPage={searchQuery.data.total_pages}
                  setPage={setSearchPage}
                />
              </>
            )}
          </>
        )}
        {discoverItemsQuery.isSuccess && (
          <>
            <div className="mx-auto max-w-xxl pb-5 text-xl flex flex-row justify-between align-center">
              Discover
              <SortOptionButton
                sortOptions={sortOptions}
                setSortOption={setSortOption}
              />
            </div>
            <div className="mx-auto max-w-xxl">
              <div className="grid gap-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {discoverItemsQuery.data.results.map((movieItem, key) => (
                  <MovieCard key={key} {...movieItem} />
                ))}
              </div>
            </div>
            {discoverItemsQuery.data.page <
              discoverItemsQuery.data.total_pages && (
              <>
                <Pagination
                  currentPage={discoverPage}
                  maxPage={
                    discoverItemsQuery.data.total_pages < 500
                      ? discoverItemsQuery.data.total_pages
                      : 500
                  }
                  setPage={setDiscoverPage}
                />
              </>
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default HomeScreen;
