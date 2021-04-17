import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import { app } from "../base";
import LogicButton from "./LogicButton";
import "./reg.css";
import moment from "moment";
import pics1 from "../videos/1.jfif";

const student = app.firestore().collection("students");
export const ViewStudents = () => {
  const [students, setStudents] = useState([]);

  const viewStudent = async () => {
    await student.orderBy("time", "desc").onSnapshot((snapshot) => {
      const item = [];
      snapshot.forEach((doc) => {
        item.push({ ...doc.data(), id: doc.id });
      });
      setStudents(item);
    });
  };

  useEffect(() => {
    viewStudent();
  }, []);
  return (
    <>
      <br />
      <br />

      <center>
        {" "}
        <div style={{ fontWeight: "bold" }}>{students.length} Students</div>
      </center>

      <div className="View_Container">
        {students.map(
          ({
            name,
            id,
            logic,
            show,
            avatar,
            createdAt,
            pyscho,
            lead,
            profile,
            interest,
          }) => (
            <div className="View_ContainerWrapper">
              {pyscho ? (
                <Button
                  style={{
                    background: "red",
                    color: "white",
                    borderRadius: "10px",
                    margin: "10px",
                    width: "80px",
                  }}
                >
                  Done
                </Button>
              ) : (
                <Button type="primary" className="Activate_Container">
                  Activate
                </Button>
              )}
              <div className="Profile_Holder">
                <div className="Image_Pix">
                  {avatar ? (
                    <img
                      src={avatar}
                      alt="profile"
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "50px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <img
                      src={pics1}
                      alt="profile"
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "50px",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </div>
                <div className="Name_Holder">
                  <h5>
                    <b>{name}</b>
                    <br />
                    {moment(createdAt).calendar()}
                  </h5>
                </div>
              </div>

              <hr />

              <div className="Profile_Container">
                <b>profile</b>
                <br />
                {profile}
              </div>

              <div className="Interest_Container">
                <b>Interest: </b>
                {interest}
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};
