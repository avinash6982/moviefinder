//Generate full image URL based on pathName from the API
export const getFullImageUrl = (path, size = 500) =>
  "https://image.tmdb.org/t/p/" + "w" + size + "/" + path;
