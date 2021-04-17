// import { Button } from "@material-ui/core";
import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { Link } from "react-router-dom";
import "./head.css";

const HeaderView = () => {
  return (
    <div
      style={{
        top: 0,
        position: "sticky",
      }}
    >
      <Header
        className="normal_head"
        style={{
          display: "flex",
          color: "white",
          textTransform: "uppercase",
          justifyContent: "space-around",
          top: 0,
          position: "sticky",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
          className="bigie"
        >
          <div className="name_head">
            <Link
              to="/"
              style={{
                color: "white",
              }}
            >
              Home
            </Link>
          </div>
          <div className="headie">
            <Link
              to="/view"
              style={{
                color: "white",
              }}
            >
              View Entry
            </Link>
          </div>

          <div>
            <Button className="normal" type="primary">
              <Link to="/studentReg">Student Register</Link>
            </Button>
          </div>
        </div>
      </Header>
    </div>
  );
};

export default HeaderView;

// <div>
//           <Button type="primary" danger>
//             <Link to="/reg">Admin Register</Link>
//           </Button>
//         </div>
