import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
// react router dom here

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { useContext } from "react";
import { DarkModeContext } from "./context/DarkModeContext";
import { AuthContext } from "./context/AuthContext";

function App() {
  // const currentUser = true;

  const {darkMode}=useContext(DarkModeContext);

  const {currentUser}=useContext(AuthContext)

  // jsx to be used called layout

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`} >
        {/*let us bring in our component now . outlet because the middle section can change with time*/}
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
      <div style={{flex:6}}>
            <Outlet />
            </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  // implementing our react-router-dom

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),

      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
