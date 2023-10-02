import { Link } from "react-router-dom";
import "../../assets/css/auth.css";
import logo from "./../../assets/logo.png";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";
import axios from "axios";
export default function Login() {
  const [email, setEmail] = useState("");
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
      .post(`${import.meta.env.VITE_APP_API_URL}user/login`, {
        email,
        password,
      })
      .then((res) => {
        setLoading(false);
        if (res.status === 200) { 
          localStorage.setItem("token", res.data.token);
          window.location.href = "/users";
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
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
          <div className="card">
            <div className="card-body">
              <div className="app-brand justify-content-center text-center">
                <Link to="/" className="app-brand-link gap-2">
                  <span className="app-brand-logo demo">
                    <img height={"50px"} src={logo} alt="" />
                  </span>
                </Link>
              </div>
              <h4 className="mb-2">Welcome Back! 👋</h4>
              <p className="mb-4">
                Please sign-in to your account and start the adventure
              </p>
              <form className="mb-3" onSubmit={handleSubmit}>
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
                <div className="mb-3">
                  <button
                  disabled={loading}
                    className="btn btn-primary d-grid w-100"
                    type="submit"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <div className="d-flex justify-content-center">
                <a href="#" className="btn btn-icon btn-label-facebook me-3">
                  Copyright 2023, Chat-Fuse
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
