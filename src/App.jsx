import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AdminLogin from "./components/forms/AdminLogin";
import UserSubmissions from "./pages/Admin/UserSubmissions";
import Landing from "./pages/Home/Landing";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/submit" element={<HomePage />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<UserSubmissions />} />
    </>
  )
);
const App = () => {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
