import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="p-2 bg-neutral lg:mb-4">
      <div className="flex justify-between items-center h-16 p-4">
        <Link to="/">
          <h1 className="lg:text-3xl text-base-content font-extrabold">
            MidJourney 2.0
          </h1>
        </Link>
        <Link to="./generate-image">
          <button className="btn btn-active btn-neutral">Generate</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
