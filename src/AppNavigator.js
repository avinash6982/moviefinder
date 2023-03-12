import React from "react";
import { Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import PageNotFound from "./screens/PageNotFound";
import MyList from "./screens/MyList";
import MovieDetails from "./screens/MovieDetails";

const appRoutes = [
  {
    path: "/",
    component: <HomeScreen />,
  },
  {
    path: "mylist",
    component: <MyList />,
  },
  {
    path: "movie/:movieId",
    component: <MovieDetails />,
  },
];

const AppNavigator = () => {
  return (
    <Routes>
      {appRoutes.map((item, key) => (
        <Route key={key} exact path={item.path} element={item.component} />
      ))}
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppNavigator;
