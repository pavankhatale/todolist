import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function Duedate() {
  const [dueDate, setdueDate] = useState(new Date()); //select dadline

  var g1 = new Date();

  // (YYYY-MM-DD)
  var g2 = dueDate;

  let Add = () => {
    if (g1.getTime() < g2.getTime()) alert("complete task asap");
    else if (g1.getTime() > g2.getTime()) alert("due task");
    else alert("you have only 12 Hr");
  };

  return (
    <>
      <DatePicker selected={dueDate} onChange={(date) => setdueDate(date)} />

      <button className="datebtn" onClick={Add}>
        Add due date
      </button>
    </>
  );
}
