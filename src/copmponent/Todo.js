import React, { useState } from "react";
import Des from "./Des";
import Duedate from "./Duedate";

export const Todo = () => {
  const [input, setinput] = useState("");
  const [item, setitem] = useState([]);

  const clickhandle = () => {
    if (!input) {
    } else {
      setitem([...item, input]);

      setinput("");
    }
  };

  const Deletetodo = (id) => {
    const Delete = item.filter((elem, index) => {
      return index !== id;
    });

    setitem(Delete);
  };

  return (
    <>
      <div>
        <div className="header text-center">
          <h3>ToDo Application</h3>

          <input
            type="text"
            placeholder="Enter task here "
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />
          <br />
          <button className="btn btn-primary mt-2 mb-1" onClick={clickhandle}>
            Add todo
          </button>
        </div>
      </div>

      <div className="cardflex ">
        {item.map((elem, index) => {
          return (
            <div className="card ">
              <div className="card-header">
                <i
                  className="fa-solid fa-trash"
                  onClick={() => Deletetodo(index)}
                  style={{ marginRight: "10px" }}
                ></i>
                <input
                  type="checkbox"
                  id="cbox3"
                  value="third_checkbox"
                  style={{ outerWidth: "4px", outerHeight: "5px" }}
                />{" "}
                <label htmlFor="cbox3"> {elem} </label>
              </div>
              <div className="card-body">
                <Des />
                <Duedate />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
