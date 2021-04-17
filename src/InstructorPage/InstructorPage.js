import React, { useState, useEffect } from "react";
import "./min.css";
import pic from "./img/1.jpg";
import pic1 from "./img/2.jpg";
import pic2 from "./img/3.jpg";
import { app } from "../base";
import moment from "moment";
import LogicPage from "./LogicPage";
import LeadershipPage from "./LeadershipPage";
import PsychologyPage from "./PsychologyPage";
import pics1 from "../videos/1.jfif";

const student = app.firestore().collection("students");

function InstructorPage() {
  const [data, setData] = useState([]);

  const gettingData = async () => {
    await student.orderBy("time", "desc").onSnapshot((snap) => {
      const item = [];
      snap.forEach((doc) => {
        item.push({ ...doc.data(), id: doc.id });
      });
      setData(item);
    });
  };

  useEffect(() => {
    gettingData();
  }, []);
  return (
    <>
      <br />
      <br />

      <center>
        {" "}
        <div style={{ fontWeight: "bold" }}>{data.length} students</div>
      </center>
      <div className="admin_container">
        {data.map(
          ({
            id,
            show,
            logic,
            leadership,
            pychology,
            avatar,
            name,
            createdAt,
            pyscho,
            lead,
            profile,
          }) => (
            <div className="admin_card">
              <div className="card_holder">
                <div className="name_img">
                  <div className="card_img">
                    {avatar ? (
                      <img
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          borderRadius: "50px",
                        }}
                        src={avatar}
                      />
                    ) : (
                      <img
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          borderRadius: "50px",
                        }}
                        src={pics1}
                      />
                    )}
                  </div>
                  <div
                    style={{
                      marginLeft: "30px",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    {name}{" "}
                    <div
                      style={{
                        fontSize: "10px",
                        fontWeight: "lighter",
                        textTransform: "none",
                      }}
                    >
                      {moment(createdAt).calendar()}
                    </div>
                  </div>
                </div>
                <br />
                <p>{profile}</p>
                <center>
                  <h5>Scores</h5>
                </center>
                <div className="box_input">
                  <div className="box">
                    <div className="name_img1">
                      <div className="card_img1">
                        <img
                          src={pic2}
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            borderRadius: "50px",
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: "10px" }}>Ubani</div>
                    </div>
                    <center>
                      <div style={{ fontWight: "bold", fontFamily: "poppins" }}>
                        Logic
                      </div>
                    </center>
                    <LogicPage id={id} show={show} logic={logic} />
                  </div>

                  <div className="box">
                    <div className="name_img1">
                      <div className="card_img1">
                        <img
                          src={pic1}
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            borderRadius: "50px",
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: "10px" }}>Samuel</div>
                    </div>
                    <center>
                      <div style={{ fontWight: "bold", fontFamily: "poppins" }}>
                        Leadership
                      </div>
                    </center>
                    <LeadershipPage
                      id={id}
                      lead={lead}
                      leadership={leadership}
                    />
                  </div>

                  <div className="box">
                    <div className="name_img1">
                      <div className="card_img1">
                        <img
                          src={pic}
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            borderRadius: "50px",
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: "10px" }}>Bukola</div>
                    </div>
                    <center>
                      <div style={{ fontWight: "bold", fontFamily: "poppins" }}>
                        Psychology
                      </div>
                    </center>
                    <PsychologyPage
                      id={id}
                      pyscho={pyscho}
                      pychology={pychology}
                    />
                  </div>
                </div>
                <center>
                  <h5>
                    Total :{" "}
                    {parseInt(logic) +
                      parseInt(leadership) +
                      parseInt(pychology)}
                  </h5>
                </center>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default InstructorPage;
