import React from "react";

export default function NavBar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{
          background: "#c6c9cb",
        }}
      >
        <div
          className="container-fluid"
          style={{
            background: "#8d8d8d",
          }}
        >
          <a
            className="navbar-brand"
            href="/home"
            style={{ color: "#6a11cb", textDecoration: "none" }}
          >
            Vechicle ShowRooms App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/add">
                  ADD Car's Details
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/update">
                  Update Car's Details
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/delete">
                  Delete Car's Book
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
