import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import MovieCard from "../../components/Cards/MovieCard";

const MyList = () => {
  const { items } = useSelector((state) => state.myList);

  return (
    <main>
      <div className="relative px-6 lg:px-8">
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
