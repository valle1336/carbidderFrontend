import logo from "./logo.svg";
import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./views/HomePage";
import Create from "./views/Create";
import MyCars from "./views/MyCars";
import MyProfile from "./views/MyProfile";
import ViewCar from "./views/ViewCar";
import LogIn from "./views/LogIn";
import Register from "./views/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/Create" element={<Create />} />
      <Route path="/MyCars" element={<MyCars />} />
      <Route path="/MyProfile/:id" element={<MyProfile />} />
      <Route path="/ViewCar/:id" element={<ViewCar />} />
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/Register" element={<Register />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
