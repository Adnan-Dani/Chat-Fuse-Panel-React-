import React from "react";
import { Link, NavLink } from "react-router-dom";
import Topbar from './Topbar';

export default function Sidebar() {
  const pages = [
    {
      label: "Dashboard",
      icon: "bx bx-home-circle",
      redirect: "/dashboard",
    },
    {
      label: "Active User",
      icon: "bx bx-chat",
      redirect: "/dashboard",
    },
    {
      label: "Today Analytics",
      icon: "bx bx-chat",
      redirect: "/dashboard",
    },
    {
      label: "Customer Details",
      icon: "bx bx-chat",
      redirect: "/dashboard",
    },
    {
      label: "Question Collection",
      icon: "bx bx-chat",
      redirect: "/dashboard",
    },
    {
      label: "Messages",
      icon: "bx bx-chat",
      redirect: "/dashboard",
    },
  ];
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <aside
          id="layout-menu"
          className="layout-menu menu-vertical menu bg-menu-theme"
        >
          <div className="app-brand demo">
            <a href="#" className="app-brand-link">
              {/* <span className="app-brand-logo demo">Logo</span> */}
              <span className="app-brand-text demo menu-text fw-bold ms-2">
                Chat Fuse
              </span>
            </a>

            <a
              href="#"
              className="layout-menu-toggle menu-link text-large ms-auto"
            >
              <i className="bx bx-chevron-left bx-sm align-middle"></i>
            </a>
          </div>

          <div className="menu-inner-shadow"></div>
          <ul className="menu-inner py-1">
            {
              pages.map((page, index) => <li key={index} className="menu-item">
                <NavLink to={page.redirect} className="menu-link">
                  <i className={`menu-icon tf-icons ${page.icon}`}></i>
                  <div className="text-truncate" data-i18n="Dashboards">
                    {page.label}
                  </div>
                </NavLink>
              </li>)
            }

          </ul>
        </aside>

        <div className="layout-page">
           <Topbar/>
          <div className="content-wrapper">
            Content
          </div>

        </div>
      </div>
    </div>
  );
}
