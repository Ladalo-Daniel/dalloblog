//import './App.css';
import Footer from "./components/footer/Footer";
import TopBar from "./components/topbar/TopBar";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/settings/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Post from "./components/post/Post";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Error from "./pages/error/Error";

const user = false;

const router = createBrowserRouter(createRoutesFromElements(
  <Route  element={<Layout />}>
     <Route index element={<Home />} />
     <Route path="/error" element={<Error />} />
     <Route path="/register" element={user ? <Home /> : <Register />} />
     <Route path="/login" element={user ? <Home /> : <Login />} />
     <Route path="/setting" element={user ? <Setting /> : <Register />} />
     <Route path="/write" element={user ? <Write /> : <Register />} />
     <Route path="/post/:postId" element={<Single />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
