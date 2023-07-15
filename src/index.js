import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import DetailsCard from './components/moviesSectionInfo/detailsCardMovie';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './pages/App.css'
import './components/HomesSection/headerSection/index.css'
import './components/HomesSection/filterContent/index.css'
import './components/HomesSection/mainComponents/index.css'
import './components/HomesSection/pagination/index.css'
import './components/HomesSection/movies/index.css'
import './components/moviesSectionInfo/detailsCardMovie/index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "details/:detailsId",
    element: <DetailsCard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
