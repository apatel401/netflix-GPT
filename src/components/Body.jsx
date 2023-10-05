import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import MoviePage from "./MoviePage";

const Body = () => {
  const mainRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/movie/:movieId",
      element: <MoviePage />,
    },
  ]);
  return <RouterProvider router={mainRouter} />;
};

export default Body;
