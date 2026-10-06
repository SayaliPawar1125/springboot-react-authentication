import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthService from "../Services/AuthService";

export default function Login({ onLogin }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await AuthService.login(formData);
      console.log("Login Response:", response.data);
      const loggedUser = response.data;

      if (onLogin) {
        onLogin(loggedUser);
      }

      alert("Login successful!");
      navigate("/");
    } catch (err) {
      console.error("Login Error:", err);
      if (err.response) {
        setError(
          err.response.data?.message || "Invalid email or password"
        );
      } else {
        setError("Unable to connect to backend");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center bg-light">
      <div className="row w-100 justify-content-center">
        <div className="col-11 col-sm-8 col-md-6 col-lg-4">
          <div className="card border-0 shadow-lg rounded-4">
            <div className="card-body p-4 p-md-5">
              {/* Heading */}
              <div className="text-center mb-4">
                <h2 className="fw-bold mb-2"> Welcome Back </h2>
                <p className="text-muted"> Login to your account </p>
              </div>

              {error && (
                <div
                  className="alert alert-danger py-2 small"
                  role="alert"
                >
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg rounded-3"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg rounded-3"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100 rounded-3 fw-semibold"
                  disabled={loading}
                >
                  {loading ? "Signing In..." : "Sign In"}
                </button>
              </form>

              <div className="text-center mt-4">
                <span className="text-muted">
                  Don't have an account?
                </span>
                <Link
                  to="/register"
                  className="text-decoration-none fw-semibold ms-1"
                >
                  Register here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
