import React, { Component } from "react";
import List from "../components/EmployeeDirectory/List";
import axios from "axios";

class EmployeeDirectory extends Component {
    state = {
        employees: [],
        employeesToDisplay: [],
        searchTerm: "",
    };



    componentDidMount() {
        this.getEmployees();
    }

    clearFilter = () => {
        this.setState({
            employeesToDisplay: this.state.employees,
            searchTerm: "",
        });
    };

    getEmployees = () => {
        axios
            .get("https://randomuser.me/api/?results=25&gender=female&nat=us")
            .then((response) => {
                this.setState({
                    employees: response.data.results,
                    employeesToDisplay: response.data.results

                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("HandleSubmit");
        console.log(this.state.searchTerm);
        const employees = [...this.state.employees];
        console.log(employees)
        const filteredEmployees = employees.filter((employee) => {
            const regex = new RegExp(this.state.searchTerm, "gi");
            return employee.name.last.match(regex);
        });
        this.setState({
            employeesToDisplay: filteredEmployees,
        });
    };

    handleSortASC = (event) => {
        event.preventDefault();
        const employees = [...this.state.employees];
        function compare(a,b) {
            const lastA = a.name.last.toUpperCase();
            const lastB = b.name.last.toUpperCase();

            let comparison = 0;
            if (lastA > lastB) {
                comparison = 1;
            }else if (lastA < lastB) {
                comparison = -1;
            }
            return comparison;
        } 
        const sortedEmployees = employees.sort(compare)
        this.setState({
            employeesToDisplay: sortedEmployees
        })
    };



    render() {
        return (
            <div>
                <div className="container">
                    <h1>Employee Directory</h1>
                    <div className="row">
                        <div className="col">
                            <form onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col-sm-10">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search By Last Name"
                                                name="searchTerm"
                                                value={this.state.searchTerm}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <button type="submit" className="btn btn-primary">
                                            Submit
                                        </button>
                                        <button onClick={this.handleSortASC} type="submit" className="btn btn-dark">
                                            Sort By Last Name
                                        </button>
                                    </div>
                                </div>
                            </form>
                            {this.state.employees.length !==
                                this.state.employeesToDisplay.length && (
                                    <button
                                        className="btn btn-secondary"
                                        onClick={this.clearFilter}>
                                        Clear Filter
                                    </button>
                                )}
                        </div>
                    </div>
                </div>
                <List employees={this.state.employeesToDisplay} />
            </div >
        );
    }
}

export default EmployeeDirectory;