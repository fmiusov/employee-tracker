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
        "https://randomuser.me/api/portraits/med/women/69.jpg"
    );

    useEffect(() => {
        axios
            .get("https://randomuser.me/api/?results=25&gender=female&nat=us")
            .then((response) => {
                
                setEmployeeImageUrl(response.data.results[0].picture.medium);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <tr>
            {/* <th scope="row"></th> */}
            <td>
                <img
                    src={employeeImageUrl}
                    alt="Employee avatar"
                    style={styles.employeePhoto}
                ></img>
            </td>
            <td>{props.name.first}</td>
            <td>{props.name.last}</td>
            <td>{props.location.state}</td>
            <td>{props.dob.age}</td>
        </tr>
    );
};

export default Item;