import React from "react";
import { GrFavorite } from "react-icons/gr";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <Link to="/">Matcher</Link>
      <Link to="/saved" className="saved-items">
        <GrFavorite />
      </Link>
      <Link to="/messages">Messages</Link>
    </div>
  );
}

export default NavBar;