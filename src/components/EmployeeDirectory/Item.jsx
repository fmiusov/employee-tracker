import React, { useEffect, useState } from "react";
import axios from "axios";

const Item = (props) => {
    const styles = {
        employeePhoto: {
            maxHeight: 100,
            maxWidth: 75
        },
    };

    const [employeeImageUrl, setEmployeeImageUrl] = useState(
        "https://randomuser.me/api/portraits/med/men/69.jpg"
    );

    useEffect(() => {
        axios
            .get("https://randomuser.me/api/")
            .then((response) => {
                console.log(response.data.results[0])
                setEmployeeImageUrl(response.data.results[0].picture.medium);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="row">
            <div className="col">
                <img
                    src={employeeImageUrl}
                    alt="Employee avatar"
                    style={styles.employeePhoto}
                ></img>
            </div>
            <div className="col">{props.id}</div>
            <div className="col">{props.employee_name}</div>
            <div className="col">{props.employee_salary}</div>
            <div className="col">{props.employee_age}</div>
        </div>
    );
};

export default Item;