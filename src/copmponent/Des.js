import React, { useState } from "react";

export default function Des() {
  const [des, setdes] = useState("");
  const [desitem, setdesitem] = useState([]);

  const adddata = () => {
    if (!des) {
    } else {
      setdesitem([...desitem, des]);

      setdes("");
    }
  };

  return (
    <>
      <div>
          
        <input
          type="text"
          placeholder="Enter description here "
          value={des}
          onChange={(e) => setdes(e.target.value)}
        />



        <button  className="desbtn" onClick={adddata}
          style={{ marginLeft: "4px",alignItems:"center",marginRight:"5px"}} >Add description</button>
     
      </div>

      <div>
        {desitem.map((elem, index) => {
          return <span> <b> {elem}</b></span>
        })}
      </div>
    </>
  );
}
