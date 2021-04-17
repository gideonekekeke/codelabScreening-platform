import React, { useState } from "react";
import { app } from "../base";
import "./min.css";
const student = app.firestore().collection("students");

function PsychologyPage({ id, pychology, pyscho }) {
  const [setting, setSetting] = useState("");
  const [changePsyco, setChangePsycho] = useState(false);
  const physco = async () => {
    await student.doc(id).update({
      pychology: parseInt(setting),
      pyscho: changePsyco,
    });
  };
  return (
    <>
      <div>
        <input
          type="Number"
          value={setting}
          onChange={(e) => {
            setSetting(e.target.value);
          }}
          style={{ width: "60%" }}
          placeholder="pyshology scores"
        />

        <button
          className={pyscho ? "button2" : "button1"}
          disabled={pyscho}
          onClick={() => {
            physco();
            setChangePsycho(true);
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default PsychologyPage;
