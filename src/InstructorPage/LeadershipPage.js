import React, { useState } from "react";
import "./min.css";
import { app } from "../base";
const student = app.firestore().collection("students");

function LeadershipPage({ leadership, id, lead }) {
  const [leading, setLeading] = useState("");
  const [scoring, setScoring] = useState(false);

  const leaders = async () => {
    await student.doc(id).update({
      leadership: leading,
      lead: scoring,
    });
  };
  return (
    <>
      <div>
        <input
          type="Number"
          value={leading}
          onChange={(e) => {
            setLeading(e.target.value);
          }}
          style={{ width: "60%" }}
          placeholder="leadership scores"
        />

        <button
          className={lead ? "button2" : "button1"}
          disabled={lead}
          onClick={() => {
            leaders();

            setScoring(true);
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default LeadershipPage;
