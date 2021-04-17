import { Button, Input } from "antd";
import React, { useState } from "react";
import { app } from "../base";

const student = app.firestore().collection("students");
const LogicButton = ({ logic, show, id }) => {
  const [logicScore, setLogicScore] = useState("");
  const [score, setScore] = useState(false);

  const changeLogic = async () => {
    await student.doc(id).update({
      logic: logicScore,
      show: score,
    });
  };

  return (
    <div>
      <Input
        type="Number"
        value={logicScore}
        onChange={(e) => {
          setLogicScore(e.target.value);
        }}
        placeholder="Logic Score"
        style={{ width: "100px" }}
      />{" "}
      <Button
        disabled={show}
        onClick={() => {
          changeLogic();
          setScore(true);
        }}
      >
        Logic
      </Button>
    </div>
  );
};

export default LogicButton;
