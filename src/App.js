import logo from "./logo.svg";
import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./components/views/HomePage";
import Create from "./components/views/Create";
import MyCars from "./components/views/MyCars";
import MyProfile from "./components/views/MyProfile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/Create" element={<Create />} />
      <Route path="/MyCars" element={<MyCars />} />
      <Route path="/MyProfile" element={<MyProfile />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
