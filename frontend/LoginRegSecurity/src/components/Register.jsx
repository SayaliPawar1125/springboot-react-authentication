
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../Services/AuthService";

export default function Register() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      console.log("Registration Data:", formData);

      const response = await AuthService.register(formData);

      console.log("Registration Response:", response.data);

      alert("Registration successful!");

      navigate("/login");

    } catch (error) {

      console.error("Registration Error:", error);

      if (error.response) {

        alert(
          error.response.data?.message ||
          "Registration failed"
        );

      } else {

        alert("Unable to connect to backend");

      }
    }
  };

  return (

    <div className="container-fluid min-vh-100 d-flex align-items-center bg-light">

      <div className="row w-100 justify-content-center">

        <div className="col-11 col-sm-8 col-md-6 col-lg-4">

          <div className="card border-0 shadow-lg rounded-4">

            <div className="card-body p-4 p-md-5">

              <div className="text-center mb-4">

                <h2 className="fw-bold mb-2">
                  Create Account
                </h2>

                <p className="text-muted">
                  Register your account
                </p>

              </div>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">

                  <label className="form-label fw-semibold">
                    First Name
                  </label>

                  <input
                    type="text"
                    className="form-control form-control-lg rounded-3"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter first name"
                    required
                  />

                </div>

                <div className="mb-3">

                  <label className="form-label fw-semibold">
                    Last Name
                  </label>

                  <input
                    type="text"
                    className="form-control form-control-lg rounded-3"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                    required
                  />

                </div>

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
                >
                  Create Account
                </button>

              </form>

              <div className="text-center mt-4">

                <span className="text-muted">
                  Already have an account?
                </span>

                <button
                  type="button"
                  className="btn btn-link text-decoration-none fw-semibold"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

