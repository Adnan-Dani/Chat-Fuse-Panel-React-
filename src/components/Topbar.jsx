import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
export default function Topbar( { sideBarOpen , setSidebarOpen } ) {
  const [ userInfo, setUserInfo ] = useState(null);
  useEffect(() => { 
    setUserInfo(jwtDecode(localStorage.getItem("token")))
  }, []);
  const logout = () => {
    localStorage.clear("answers");
    localStorage.clear("users");
    localStorage.clear("token");
    window.location.href = "/";
  }
  return (
    <>
      <header className="app-header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item d-block d-xl-none">
              <button
              onClick={()=> setSidebarOpen(!sideBarOpen)}
                id="headerCollapse"
                href="#"
              >
                <i className="ti ti-menu-2"></i>
              </button>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link nav-icon-hover" href="javascript:void(0)">
                <i className="ti ti-bell-ringing"></i>
                <div className="notification bg-primary rounded-circle"></div>
              </a>
            </li> */}
          </ul>
          <div
            className="navbar-collapse justify-content-end px-0"
            id="navbarNav"
          >
            <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
              <a className="btn btn-primary">
                Hello <b>{userInfo?.name || "User"}</b>
              </a>
              <li className="nav-item dropdown">
                <a
                  className="nav-link nav-icon-hover"
                  href="#"
                  id="drop2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsxpJxFOtoiJhB9nvQsEsHXmgTAatQD7o7-Q&usqp=CAU"
                    alt=""
                    width="35"
                    height="35"
                    className="rounded-circle"
                  />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                  aria-labelledby="drop2"
                >
                  <div className="message-body">
                    {/* <a
                      href="javascript:void(0)"
                      className="d-flex align-items-center gap-2 dropdown-item"
                    >
                      <i className="ti ti-user fs-6"></i>
                      <p className="mb-0 fs-3">My Profile</p>
                    </a>  */}
                    <button
                      onClick={logout}
                      className="btn btn-outline-primary mx-3 mt-2 d-block"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </li>
              <a style={{ fontSize:"28px" , cursor:"pointer" }} onClick={logout}>
                  <i className="ti ti-logout"></i>
              </a>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
