import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, HomeLayout, Menu, Error, SinglePageError } from "./pages";
import Header from "./components/Header";
import MainPage from "./components/MainPage";

import { loader as LandingLoader } from "./pages/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <div>
            <Header />
            <MainPage />
          </div>
        ),
      },
      {
        path: "menu",
        element: <Menu />,
        errorElement: <SinglePageError />,
        loader: LandingLoader,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
