import './App.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard"
import Navbar from './components/Navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar/>
      <Home/>
    </div>
  },
  {
    path: "/",
    element: <div>
      <Navbar/>
      <About/>
    </div>
  },
  {
    path: "/",
    element: <div>
      <Navbar/>
      <Dashboard/>
    </div>
  },
]);


function App() {
  

  return (
    <>
      {/* <RouterProvider router={router}/> */}
      <Navbar/>
    </>
  )
}

export default App
