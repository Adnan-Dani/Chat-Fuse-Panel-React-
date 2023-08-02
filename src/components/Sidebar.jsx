import { Link, NavLink } from "react-router-dom";
import Topbar from "./Topbar";
import logo from "./../assets/logo.png";
import PropTypes from "prop-types";
export default function Sidebar({ children }) {
  const pages = [
    {
      label: "Dashboard",
      icon: "ti ti-layout-dashboard",
      redirect: "/dashboard",
    },
    {
      label: "Active User",
      icon: "ti ti-user",
      redirect: "/users",
    },
    {
      label: "Today Analytics",
      icon: "ti ti-chart-infographic",
      redirect: "/analytics",
    },
    {
      label: "Customer Details",
      icon: "ti ti-article",
      redirect: "/customers",
    },
    {
      label: "Question Collection",
      icon: "ti ti-template",
      redirect: "/questions",
    },
    {
      label: "Messages",
      icon: "ti ti-mail",
      redirect: "/messages",
    },
    // {
    //   label: "Settings",
    //   icon: "ti ti-adjustments-horizontal",
    //   redirect: "/settings",
    // },
  ];
  return (
    <>
      <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <aside className="left-sidebar">
          <div>
            <div className="brand-logo d-flex align-items-center justify-content-between">
              <Link href={"/dashboard"} className="text-nowrap logo-img ">
                <img src={logo} width="90%" alt="" />
              </Link>
              <div
                className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
                id="sidebarCollapse"
              >
                <i className="ti ti-x fs-8"></i>
              </div>
            </div>
            <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
              <ul id="sidebarnav">
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                  <span className="hide-menu">Home</span>
                </li>
                {pages.map((page, index) => (
                  <li className="sidebar-item" key={index}>
                    <NavLink
                      className="sidebar-link"
                      to={page.redirect}
                      aria-expanded="false"
                    >
                      <span>
                        <i className={page.icon}></i>
                      </span>
                      <span className="hide-menu">{page.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="unlimited-access hide-menu bg-light-primary position-relative mb-7 mt-5 rounded">
                <div className="d-flex">
                  <div className="unlimited-access-title me-3">
                    <h6 className="fw-semibold fs-4 mb-6 text-dark w-85">
                      Upgrade to pro
                    </h6>
                    <a className="btn btn-primary fs-2 fw-semibold lh-sm">
                      Buy Pro
                    </a>
                  </div>
                  <div className="unlimited-access-img">
                    <img
                      src="../assets/images/backgrounds/rocket.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </aside>
        <div className="body-wrapper">
          <Topbar />
          <div className="container">
            {children}
            <div className="py-6 px-6 text-center">
              <p className="mb-0 fs-4">
                Design and Developed by{" "}
                <a
                  href="#"
                  className="pe-1 text-primary text-decoration-underline"
                >
                  Chat Fuse
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Sidebar.propTypes = {
  children: PropTypes.any,
};
