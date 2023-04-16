import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-info">
      <div className="container-fluid">
        <a className="navbar-brand text-white px-5" href="#">To-Do List W/Context API & Flux</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto px-5">
            <Link to="/" className="nav-link active text-white" aria-current="page">Home</Link>
            <Link to="/demo" className="nav-link active text-white">Demo</Link>
            <Link to="/TODO" className="nav-link active text-white">TODO</Link>

          </div>
        </div>
      </div>
    </nav>
  );
};