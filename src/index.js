import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import the Provider
import store from './state/store'; // Import the Redux store
import Home from './Pages/Home';
import Remote from './Pages/remote/Remote';
import Admin_component from './Pages/admin/Admin';
import SignIn from './Pages/account/signIn';
import SignUp from './Pages/account/signUp';
import Open_positions from './Pages/openPositions/openPositions.js';
import reportWebVitals from './reportWebVitals';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Configure the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/remote",
    element: <Remote />,
  },
  {
    path: "/admin",
    element: <Admin_component/>,
  },
  {
    path: "/signIn",
    element: <SignIn/>,
  },

{
    path: "/signUp",
    element: <SignUp/>,
  },
  {
    path: "/openPositions",
    element: <Open_positions/>,
  },
  

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> {/* Wrap the application with the Provider */}
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
