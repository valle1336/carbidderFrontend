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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<HomePage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
