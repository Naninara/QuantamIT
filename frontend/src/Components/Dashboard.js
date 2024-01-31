import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Dashboard.css";
const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/user")
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((err) => {
        alert("Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return !localStorage.getItem("jwt") ? (
    <div id="unauthorized-container">
      <h1>401 UnAuthorized </h1>
      <Link to={"/"}>
        <button className="btn btn-primary">Click here for login</button>
      </Link>
    </div>
  ) : loading ? (
    <div id="unauthorized-container">
      <h1>Loading...</h1>
    </div>
  ) : (
    <div id="dashboard-container">
      <div className="logout-div">
        <button
          className="btn btn-primary"
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Log Out
        </button>
      </div>
      <div className="table-div">
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>DOB</th>
              <th>Domain</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((ele) => {
              return (
                <tr key={ele.id}>
                  <td>{ele.id}</td>
                  <td>
                    <div className="profile-div">
                      <img
                        src={ele.image}
                        className="profile-img"
                        alt="profile"
                      />
                      {ele.firstName}
                    </div>
                  </td>
                  <td>{ele.birthDate}</td>
                  <td>{ele.domain}</td>
                  <td>
                    <div className="profile-actions">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Outline"
                        viewBox="0 0 24 24"
                        width="512"
                        height="512"
                      >
                        <path d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
                        <path d="M21.294,13.9l-.444-.256a9.1,9.1,0,0,0,0-3.29l.444-.256a3,3,0,1,0-3-5.2l-.445.257A8.977,8.977,0,0,0,15,3.513V3A3,3,0,0,0,9,3v.513A8.977,8.977,0,0,0,6.152,5.159L5.705,4.9a3,3,0,0,0-3,5.2l.444.256a9.1,9.1,0,0,0,0,3.29l-.444.256a3,3,0,1,0,3,5.2l.445-.257A8.977,8.977,0,0,0,9,20.487V21a3,3,0,0,0,6,0v-.513a8.977,8.977,0,0,0,2.848-1.646l.447.258a3,3,0,0,0,3-5.2Zm-2.548-3.776a7.048,7.048,0,0,1,0,3.75,1,1,0,0,0,.464,1.133l1.084.626a1,1,0,0,1-1,1.733l-1.086-.628a1,1,0,0,0-1.215.165,6.984,6.984,0,0,1-3.243,1.875,1,1,0,0,0-.751.969V21a1,1,0,0,1-2,0V19.748a1,1,0,0,0-.751-.969A6.984,6.984,0,0,1,7.006,16.9a1,1,0,0,0-1.215-.165l-1.084.627a1,1,0,1,1-1-1.732l1.084-.626a1,1,0,0,0,.464-1.133,7.048,7.048,0,0,1,0-3.75A1,1,0,0,0,4.79,8.992L3.706,8.366a1,1,0,0,1,1-1.733l1.086.628A1,1,0,0,0,7.006,7.1a6.984,6.984,0,0,1,3.243-1.875A1,1,0,0,0,11,4.252V3a1,1,0,0,1,2,0V4.252a1,1,0,0,0,.751.969A6.984,6.984,0,0,1,16.994,7.1a1,1,0,0,0,1.215.165l1.084-.627a1,1,0,1,1,1,1.732l-1.084.626A1,1,0,0,0,18.746,10.125Z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Bold"
                        viewBox="0 0 24 24"
                        width="512"
                        height="512"
                      >
                        <path d="M14.121,12,18,8.117A1.5,1.5,0,0,0,15.883,6L12,9.879,8.11,5.988A1.5,1.5,0,1,0,5.988,8.11L9.879,12,6,15.882A1.5,1.5,0,1,0,8.118,18L12,14.121,15.878,18A1.5,1.5,0,0,0,18,15.878Z" />
                      </svg>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Dashboard;
