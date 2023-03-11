import React from "react";
import { AiFillStar } from "react-icons/ai";

import { getFullImageUrl } from "../../utils/utils";

const MovieCard = (props) => (
  <div className="rounded overflow-hidden shadow-lg flex flex-row">
    <img
      data-testid="thumb-image"
      className="w-1/2 max-h-52"
      src={
        props.poster_path
          ? getFullImageUrl(props.poster_path)
          : "https://placehold.jp/3d4070/ffffff/400x600.png?text=No%20image"
      }
      alt="Sunset in the mountains"
    />
    <div className="p-4">
      <div>
        <div className="font-bold text-sm mb-2 line-clamp-2">{props.title}</div>
        <p className="text-gray-700 text-xs line-clamp-4">{props.overview}</p>
      </div>

      <div className="pt-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
          Lang: {props.original_language}
        </span>
      </div>

      <div className="pt-2 basis-1/5 flex flex-row">
        <AiFillStar color="gold" />
        <div className="text-xs">{props.popularity}</div>
      </div>

      <div className="pt-2 basis-1/5 flex flex-row text-xs">
        {props.release_date}
      </div>
    </div>
  </div>
);

export default MovieCard;
