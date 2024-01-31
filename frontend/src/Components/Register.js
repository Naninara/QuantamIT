import axios from "axios";
import React, { useState } from "react";
import { Modal, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import logo from "./user.png";
const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const [modelOpen, setModelOpen] = useState(false);
  const [modelData, setModelData] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setRegisterData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !registerData.username ||
      !registerData.DOB ||
      !registerData.password ||
      !registerData.email
    ) {
      setModelOpen(true);
      setModelData("All Details Must Be Filled");
      return;
    }

    setModelOpen(true);
    setLoading(true);
    axios
      .post("http://localhost:3500/auth/signup", { ...registerData })
      .then((response) => {
        localStorage.setItem("jwt", response.data.jwt);
        navigate("/dashboard");
      })
      .catch((err) => {
        if (!err.response) {
          setModelData("Server Not Responding");
        } else {
          setModelData(err.response.data);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <div className="main_container_register">
        <div className="register_container">
          <div className="top_container">
            <div className="design">
              <div className="circle circle1" />
              <div className="circle circle2" />
              <div className="circle circle3" />
            </div>
            <div className="signin">
              <h1>sign&nbsp;Up</h1>
            </div>
            <div className="user_logo_container">
              <img src={logo} alt="profile" />
            </div>
          </div>
          <div className="register_form_container">
            <form>
              <div className="input-container">
                <div className="input">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                  >
                    <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-5,21.797v-3.297c0-.827.673-1.5,1.5-1.5h7c.827,0,1.5.673,1.5,1.5v3.297c-1.501.769-3.201,1.203-5,1.203s-3.499-.434-5-1.203Zm11-.582v-2.715c0-1.379-1.122-2.5-2.5-2.5h-7c-1.378,0-2.5,1.121-2.5,2.5v2.715c-3.008-1.965-5-5.362-5-9.215C1,5.935,5.935,1,12,1s11,4.935,11,11c0,3.853-1.992,7.25-5,9.215Zm-6-15.215c-2.206,0-4,1.794-4,4s1.794,4,4,4,4-1.794,4-4-1.794-4-4-4Zm0,7c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Z" />
                  </svg>

                  <input
                    placeholder="Enter Your Name"
                    name="username"
                    type="text"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="input">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Outline"
                    viewBox="0 0 24 24"
                    width="512"
                    height="512"
                  >
                    <path d="M19,2H18V1a1,1,0,0,0-2,0V2H8V1A1,1,0,0,0,6,1V2H5A5.006,5.006,0,0,0,0,7V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V7A5.006,5.006,0,0,0,19,2ZM2,7A3,3,0,0,1,5,4H19a3,3,0,0,1,3,3V8H2ZM19,22H5a3,3,0,0,1-3-3V10H22v9A3,3,0,0,1,19,22Z" />
                    <circle cx="12" cy="15" r="1.5" />
                    <circle cx="7" cy="15" r="1.5" />
                    <circle cx="17" cy="15" r="1.5" />
                  </svg>

                  <input
                    placeholder="Enter Your DOB"
                    name="DOB"
                    type="text"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="input">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Bold"
                    viewBox="0 0 24 24"
                    width="512"
                    height="512"
                  >
                    <path d="M18.5,1H5.5A5.506,5.506,0,0,0,0,6.5v11A5.506,5.506,0,0,0,5.5,23h13A5.506,5.506,0,0,0,24,17.5V6.5A5.506,5.506,0,0,0,18.5,1Zm0,3a2.476,2.476,0,0,1,1.643.631l-6.5,6.5a2.373,2.373,0,0,1-3.278,0l-6.5-6.5A2.476,2.476,0,0,1,5.5,4Zm0,16H5.5A2.5,2.5,0,0,1,3,17.5V8.017l5.239,5.239a5.317,5.317,0,0,0,7.521,0L21,8.017V17.5A2.5,2.5,0,0,1,18.5,20Z" />
                  </svg>

                  <input
                    placeholder="Enter Your Email"
                    name="email"
                    type="email"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="input">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                  >
                    <g id="_01_align_center" data-name="01 align center">
                      <path d="M19,8V7A7,7,0,0,0,5,7V8H2V21a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8ZM7,7A5,5,0,0,1,17,7V8H7ZM20,21a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V10H20Z" />
                      <rect x="11" y="14" width="2" height="4" />
                    </g>
                  </svg>

                  <input
                    placeholder="Enter Your Password"
                    name="password"
                    type="password"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="input-links-container">
                <div>
                  <p className="create_account">Already have a Account</p>
                </div>
                <Link to={"/"}>
                  <div className="create_account">
                    <p>Sign In</p>
                  </div>
                </Link>
              </div>
              <div className="submit">
                <button
                  type="submit"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Modal
        show={modelOpen}
        onHide={() => {
          setModelOpen(!modelOpen);
        }}
      >
        <Modal.Header closeButton>
          {loading ? (
            <div
              style={{
                display: "flex",
                alignContent: "center",
              }}
            >
              <Spinner animation="grow" />
              <p>Loading</p>
            </div>
          ) : (
            modelData
          )}
        </Modal.Header>
      </Modal>
    </>
  );
};

export default Register;
