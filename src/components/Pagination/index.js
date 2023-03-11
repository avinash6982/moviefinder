import React from "react";
import {
  BiLeftArrowAlt,
  BiRightArrowAlt,
  BiArrowFromLeft,
  BiArrowFromRight,
} from "react-icons/bi";

const Pagination = ({ currentPage, setPage, maxPage }) => {
  return (
    <>
      <div className="mx-auto max-w-xxl pt-5 text-xl">
        <div className="flex flex-row justify-center">
          <nav aria-label="pagination">
            <ul className="bg-white inline-flex items-center -space-x-px">
              <li
                onClick={() => setPage(1)}
                className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
              >
                <BiArrowFromRight />
              </li>

              <li
                onClick={() => currentPage > 1 && setPage(currentPage - 1)}
                className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <BiLeftArrowAlt />
              </li>

              <li className="px-3 py-2 leading-tight text-blue-500 bg-white border border-blue-300 hover:bg-blue-100 hover:text-blue-700">
                {currentPage}
              </li>

              <li
                onClick={() => setPage(currentPage + 1)}
                className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <BiRightArrowAlt />
              </li>

              <li
                onClick={() => setPage(maxPage)}
                className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
              >
                <BiArrowFromLeft />
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="mx-auto max-w-xxl pb-5 text-md flex flex-row justify-center">
        Showing page {currentPage} of {maxPage < 500 ? maxPage : 500}
      </div>
    </>
  );
};
export default Pagination;
