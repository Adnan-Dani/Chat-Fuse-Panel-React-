import { Link, NavLink } from "react-router-dom";
import Topbar from "./Topbar";
import logo from "./../assets/logo.png";
import PropTypes from "prop-types";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { enqueueSnackbar } from "notistack";
import axios from "axios";

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
      label: "Weekly Analytics",
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
  ];
  const [sideBarOpen, setSidebarOpen] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //  New User
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return enqueueSnackbar("Please enter both email and password.", {
        variant: "info",
      });
    }
    setLoading(true);
    axios
      .post(`${import.meta.env.VITE_APP_API_URL}user/register`, {
        username,
        email,
        password,
      })
      .then((res) => {
        setLoading(false);
        console.log(res.status)
        if (res.status === 200) { 
          setUsername("");
          setEmail("");
          setPassword("");
          setShow(false);
          enqueueSnackbar(res.data || "Invalid error occured.", {
            variant: "success",
          });
        }
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar(err.response.data || "Invalid error occured.", {
          variant: "error",
        });
      });
  };
  return (
    <>
      <div
        className={`page-wrapper ${sideBarOpen ? "show-sidebar" : ""}`}
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <aside className="left-sidebar ">
          <div>
            <div className="brand-logo d-flex align-items-center justify-content-between">
              <Link href={"/dashboard"} className="text-nowrap logo-img ">
                <img src={logo} width="90%" alt="" />
              </Link>
              <div
                className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
                id="sidebarCollapse"
              >
                <i
                  onClick={() => setSidebarOpen(!sideBarOpen)}
                  className="ti ti-x fs-8"
                ></i>
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
                <div className=" title me-3">
                  <h6 className="fw-semibold fs-4 mb-6 text-dark w-85">
                    New Admin
                  </h6>{" "}
                  <button
                    className="btn btn-primary fs-2 fw-semibold lh-sm"
                    onClick={handleShow}
                  >
                    <i className="ti ti-plus"></i>
                  </button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Add New User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> 
                      <div className="mb-3">
                          <label htmlFor="username" className="form-label">
                            Username
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter your Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="mb-3 form-password-toggle">
                          <div className="d-flex justify-content-between">
                            <label className="form-label" htmlFor="password">
                              Password
                            </label>
                          </div>
                          <div className="input-group input-group-merge">
                            <input
                              type="password"
                              id="password"
                              className="form-control"
                              value={password}
                              placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                              aria-describedby="password"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="mb-3"></div>
                         
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button
                        variant="primary"
                        disabled={loading}
                        onClick={ handleSubmit}
                      >
                        Add
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </nav>
          </div>
        </aside>
        <div className="body-wrapper">
          <Topbar sideBarOpen={sideBarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="container content-wrapper">{children}</div>
          <div className=" text-center">
            <p className="mb-0 ">
              Design and Developed by <a href="https://kamrancreation.com/" target="_blank" rel="noreferrer" className=" text-primary text-decoration-underline">
                Kamran Creation
              </a>  
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

Sidebar.propTypes = {
  children: PropTypes.any,
};
