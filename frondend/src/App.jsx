import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

const App = () => {
 
  return (
    <div>
      <NavBar/>
      <div className="">
        <Outlet/>
      </div>

      {/* <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </ul>
      <div className="">
        <Outlet/>
      </div> */}
    </div>
  );
};

export default App;
