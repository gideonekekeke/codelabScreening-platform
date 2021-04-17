import React, { useState } from "react";

import { app } from "../base";
import "./min.css";

const student = app.firestore().collection("students");

function LogicPage({ logic, show, id }) {
  const [logicScore, setLogicScore] = useState(parseInt);
  const [score, setScore] = useState(false);

  const changeLogic = async () => {
    await student.doc(id).update({
      logic: logicScore,
      show: score,
    });
  };

  return (
    <>
      <div>
        <input
          type="Number"
          onChange={(e) => { 
            setLogicScore(e.target.value);
          }}
          value={logicScore}
          style={{ width: "60%" }}
          placeholder="logic scores"
        />
        <button
          className={show ? "button2" : "button1"}
          disabled={show}
          onClick={() => {
            changeLogic();
            setScore(true);
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default LogicPage;
