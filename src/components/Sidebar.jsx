import React from "react";

export const Sidebar = ({ selectTab, setSelectTab }) => {
  // selecting the tab on click listener
  const handleClick = (tabName) => {
    setSelectTab(tabName);
  };
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4" style={{ fontWeight: "bold" }}>
          Buzz
          <span style={{ fontFamily: "cursive", color: "orange" }}>
            Threads
          </span>
        </span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li
          className="nav-item"
          onClick={() => {
            setSelectTab("Home");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectTab === "Home" && "active"
            }`}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>
        </li>
        <li onClick={() => {
           setSelectTab("Create Post");
          }}>
          <a
            href="#"
            className={`nav-link text-white ${
              selectTab === "Create Post" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </a>
        </li>
      </ul>
      <hr />
      <p className="text-center sidebarBottomPara">
        Buzz
        <span style={{ color: "orange" }}>Threads</span>
      </p>
    </div>
  );
};
