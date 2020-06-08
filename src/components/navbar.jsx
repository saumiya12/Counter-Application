import React, { Component } from "react";

//STATELESS FUNCTIONAL COMPOENENT

const NavBar = ({ totalCounters }) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-seconndary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
