import React from "react";
import Item from "./Item";

const List = (props) => {
  return (
    <div className="container">
      <div className="row">
        <h1>You have {props.employees.length} employees.</h1>
      </div>
      <div>
            {props.employees.map((employee) => (
              <Item {...employee} key={employee.id}/>
            ))}
      </div>
    </div>
  );
};

export default List;