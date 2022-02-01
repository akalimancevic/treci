import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
    <Link to="/"><h2>Home</h2></Link>
    <Link to="/saved"><h2>Faves</h2></Link>
	</div>
  );
}
		
export default NavBar;