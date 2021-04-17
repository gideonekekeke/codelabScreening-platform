import { Button } from "antd";
import React from "react";
import { app } from "../base";
import CaseProps from "./CaseProps";
import { Link, useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TransitionsModal from "./CaseProps";

const db = app.firestore().collection("case");

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const SuccessStory = () => {
  const classes = useStyles();
  const hist = useHistory();
  const [caseData, setCaseData] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getCases = async () => {
    await db.onSnapshot((snapshot) => {
      const item = [];
      snapshot.forEach((doc) => {
        item.push({ ...doc.data(), id: uuid() });
      });
      setCaseData(item);
      // console.log(caseData);
    });
  };

  React.useEffect(() => {
    getCases();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "40px",
        marginBottom: "20px ",
      }}
    >
      {caseData.map(({ id, title, desc, details }) => (
        <div
          ket={id}
          style={{
            width: "300px",
            // height: "150px",
            textAlign: "left",
            margin: "10px",
            border: "1px solid lightblue",
            padding: "20px 10px",
            cursor: "pointer",
          }}
        >
          <h2
            style={{
              margin: "0",
            }}
          >
            CASE STUDY
          </h2>
          <div
            style={{
              backgroundColor: "#5BB3B7",
              width: "50px",
              height: "5px",
              marginBottom: "20px ",
            }}
          >
            {" "}
          </div>
          <div>{title}</div>
          <br />
          <div>{details}</div>
          <br />

          {open ? (
            <CaseProps id={id} title={title} desc={desc} details={details} />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default SuccessStory;

// <CaseProps id={id} title={title} desc={desc} details={details} />
