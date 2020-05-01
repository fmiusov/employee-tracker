import React, { Component } from "react";
import List from "../components/EmployeeDirectory/List";
import axios from "axios";

class EmployeeDirectory extends Component {
    state = {
        employees: []
    };

    componentDidMount() {
        this.getEmployees();
    }

    getEmployees = () => {
        axios
            .get("https://randomuser.me/api/")
            .then((response) => {
                this.setState({
                    employees: response.data.results[0],
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    render() {
        return (
            <div>
                <h1>Employee Directory</h1>
                <List employees={this.state.employees} />
            </div>
        )
    }
}

export default EmployeeDirectory;