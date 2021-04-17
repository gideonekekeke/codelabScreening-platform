import { Button, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState, useEffect } from "react";
import { app } from "../base";
import "./com.css";
import pic from "../image/2.jpg";
import pic1 from "../videos/1.jfif";
import { useHistory } from "react-router";

const student = app.firestore().collection("students");
const ComponentStudent = () => {
  const hist = useHistory();
  const [imgPreview, setImgPreview] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [interest, setInterest] = useState("");
  const [profile, setProfile] = useState("");
  const [logic, setLogic] = useState(0);
  const [leadership, setLeadership] = useState(0);
  const [pychology, setPychology] = useState(0);
  const [show, setShow] = useState(false);
  const [pyscho, setPsycho] = useState(false);
  const [lead, setLead] = useState(false);

  const uploadAvatar = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setAvatar(await fileRef.getDownloadURL());
    console.log(avatar);
  };

  const onPreview = (e) => {
    const file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      if (reader.readyState === 2) {
        setImgPreview(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const pushToFirebase = async () => {
    await student.doc().set({
      name,
      email,
      address,
      profile,
      interest,
      logic,
      leadership,
      pychology,
      avatar,
      show,
      pyscho,
      lead,
      createdAt: new Date().toLocaleString(),
      time: new Date().toString(),
    });
    hist.push("/view");
  };

  useEffect(() => {}, []);

  return (
    <div style={{ width: "100%" }}>
      <br />
      <br />
      <center>
        <div style={{ fontWeight: "bold" }}>
          WELCOME TO CODELAB INTAKE REGISTRATION
        </div>
        <br />
        <br />
        <div>Please fill in your Details</div>
        <div
          className="my_holder"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            backgroundColor: "#F3F5FB",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "300px",
              backgroundColor: "white",
              borderRadius: "5px",
              margin: "5px",
              height: "330px",
              boxShadow: "0px 5px 7px -2px  rgba(0, 0, 0, 0.35)",
            }}
          >
            <img src={pic} style={{ height: "60px", width: "150px" }} />
            <br />
            <br />
            <div style={{ fontWeight: "bold" }}>About Codelab</div>
            <div style={{ width: "90%" }}>
              CodeLab is a Tech Hub located in Ajegunle that trains young Adults
              who are economically disadvantaged and Orphans in slums within the
              age of 16-25 with programming skills, training them to become
              software developers building Application for Desktop, Mobile and
              the Web.
            </div>
          </div>
          <div
            style={{
              width: "300px",
              backgroundColor: "lightgray",
              borderRadius: "5px",
              margin: "5px",
              height: "330px",
              boxShadow: "0px 5px 7px -2px  rgba(0, 0, 0, 0.35)",
            }}
          >
            <label>Choose Avatar</label>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "90%",
              }}
            >
              <div
                style={{
                  height: "30px",
                  width: "33px",

                  borderRadius: "50px",
                }}
              >
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "50px",
                  }}
                  src={pic1}
                />
              </div>
              <Input
                type="file"
                onChange={uploadAvatar}
                style={{
                  width: "90%",
                  backgroundColor: "transparent",
                  borderWidth: "0",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: "10px",
                marginTop: "10px",
                alignItems: "center",
              }}
            >
              <label
                style={{
                  width: "70px",

                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                Name:{" "}
              </label>
              <Input
                style={{
                  width: "70%",
                }}
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: "10px",
                marginTop: "10px",
                alignItems: "center",
              }}
            >
              <label
                style={{
                  // marginRight: "10px",
                  width: "70px",
                  // backgroundColor: "red",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                Email:{" "}
              </label>
              <Input
                style={{
                  width: "70%",
                }}
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: "10px",
                marginTop: "10px",
                alignItems: "center",
              }}
            >
              <label
                style={{
                  // marginRight: "10px",
                  width: "70px",
                  // backgroundColor: "red",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                Address:{" "}
              </label>
              <Input
                style={{
                  width: "70%",
                }}
                placeholder="Address"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: "10px",
                marginTop: "10px",
                alignItems: "center",
                // backgroundColor: "red",
              }}
            >
              <label
                style={{
                  width: "70px",

                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                Interest:{" "}
              </label>
              <Input
                style={{
                  width: "70%",
                }}
                placeholder="AI/ML | Mobile Dev | Web Dev"
                value={interest}
                onChange={(e) => {
                  setInterest(e.target.value);
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginLeft: "10px",
                marginTop: "10px",
                marginBottom: "10px",
                alignItems: "center",
              }}
            >
              <label
                style={{
                  // marginRight: "10px",
                  width: "70px",
                  // backgroundColor: "red",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                Profile:{" "}
              </label>

              <TextArea
                style={{
                  width: "70%",
                  resize: "none",
                }}
                placeholder="Profile"
                value={profile}
                onChange={(e) => {
                  setProfile(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <Button
          type="primary"
          // danger
          style={{
            width: "200px",
            marginTop: "5px",
            marginBottom: "10px",
          }}
          onClick={pushToFirebase}
        >
          Register
        </Button>
      </center>
    </div>
  );
};

export default ComponentStudent;
