import React  from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
 
import MovieCard from "../../components/Cards/MovieCard";
import { getFullImageUrl } from "../../utils/utils";
import { BsCheck, BsLink, BsPlus } from "react-icons/bs";
import { addToList, removeFromList } from "../../redux/myList";
import {fetchMovieDetails} from "./api"

const MovieDetails = () => { 
  const dispatch = useDispatch();
  const {movieId} = useParams();
  const { items, itemIds } = useSelector((state) => state.myList);  
  
  //react-query function for movieDetails based on movie id
  //runs only when movieId is not null 
  const {data, isSuccess} = useQuery(["movieDetails", movieId], () => fetchMovieDetails(movieId), {
    enabled: !!movieId, 
  }) 

  return (
    <main> 
      <div className="relative px-6 pt-4 lg:px-8"> 
      
      {
        isSuccess &&
        
      <div 
      style={{backgroundImage: `url(${getFullImageUrl(data.data?.backdrop_path)})`, backgroundSize: 'cover'}}
      className="mx-auto max-w-xxl mb-5 rounded overflow-hidden grid grid-cols-3 gap-4 backdrop-blur-md">
        <div className="col-span-3 sm:col-span-3 xs:col-span-3 md:col-span-1 lg:col-span-1 grid place-content-center p-5">
           {itemIds.includes(data?.data?.id) ? (
        <div
          onClick={() => dispatch(removeFromList(data?.data?.id))}
          className="absolute bg-white bg-opacity-60 hover:bg-opacity-80 rounded left-2 bottom-2 p-1 flex flex-row pr-3"
        > 
            <BsCheck color="#8C1F08" size={30} /> Already in your list
        </div>
      ) : (
        <div
          onClick={() => dispatch(addToList(data?.data))}
          className="absolute bg-white bg-opacity-60 hover:bg-opacity-80 rounded left-2 bottom-2 p-1 flex flex-row pr-3"
        >
          <BsPlus color="#8C1F08" size={30} /> Add to your list
        </div>
      )}
        <img src={`${getFullImageUrl(data.data?.poster_path)}`} className="h-72 rounded" />
      </div>
      <div className="col-span-3 sm:col-span-3 xs:col-span-3 md:col-span-2 lg:col-span-2 flex flex-col bg-white m-5 bg-opacity-80 rounded p-5">
        <div className="text-4xl font-bold"> 
        {data.data.title}
        {data?.data?.homepage && 
        <span><BsLink color="#6F6FFF" className="opacity-60 hover:scale-105 hover:opacity-100" onClick={() => window.open(data.data?.homepage)} /></span>}
       
        </div>
        {
          !!data?.data?.release_date &&
        <div className="text-md pb-2">{data?.data?.release_date}</div>
        }
        {
          !!data?.data?.status &&
        <div className="text-md pb-2">
          <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">
            {data?.data?.status}
            </span>
            </div>
        }
        <div className="pb-2"> 
        {
          data?.data?.genres?.map((genre, key) =>
           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2" key={key}>{genre?.name}</span>)
        }
        </div>
        <div className="text-md pb-2"> 
        {data.data.overview}
        </div>
          {
            !!data.data?.vote_average&& !!data.data?.vote_count&&
        <div className="text-md pt-2">
        <div> 
          {`Rated: `}<strong>{data.data?.vote_average}</strong>{` from `}<strong>{data.data?.vote_count}{` Ratings`}</strong></div> 
        </div>
          }
          {
            !!data.data?.production_countries&&
        <div className="text-md pt-2">
        <div>Production countries:{` `}
          {
            data.data?.production_countries?.map((country, key) => <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2" key={key}>{country.name}</span>)
          }</div> 
        </div>
          }
          {
            !!data.data?.spoken_languages&&
        <div className="text-md pt-2">
        <div>Spoken languages:{` `}
          {
            data.data?.spoken_languages?.map((language, key) => <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2" key={key}>{language.english_name}</span>)
          }</div> 
        </div>
          }
          {
            !!data.data?.budget&&
        <div className="text-md pt-2">
        <div>Budget: <strong>{data.data?.budget}</strong></div> 
        </div>
          }
          {
           !!data.data?.original_language &&
        <div className="text-md pt-2">
        <div>Original Language: <strong>{data.data?.original_language}</strong></div> 
        </div>
          }
          {
            !!data.data?.popularity&&
        <div className="text-md pt-2">
        <div>Popularity: <strong>{data.data?.popularity}</strong></div> 
        </div>
          }
          {
            !!data.data?.revenue&&
        <div className="text-md pt-2">
        <div>Revenue: <strong>{data.data?.revenue}</strong></div> 
        </div>
          }
      </div>
      </div>
      }

        {items?.length > 0 ? (
          <>
          <div className="mx-auto max-w-xxl pt-5">
          <div className="mx-auto max-w-xxl pb-5 text-xl flex flex-row justify-between align-center"> 
              
On your list
            </div>
          </div>
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

export default MovieDetails;
