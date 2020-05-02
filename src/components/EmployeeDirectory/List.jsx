import React from "react";
import Item from "./Item";

const List = (props) => {
    return (
        <div className="container">
            <div className="row">
                <h3>You have {props.employees.length} employees</h3>
            </div>
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Avatar</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">State</th>
                            <th scope="col">Age</th>
                        </tr>
                    </thead>
                    <tbody>

                        {props.employees.map((employee, index) => (
                            <Item {...employee} key={index} />
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default List;