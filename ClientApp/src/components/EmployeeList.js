"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var linkStyle = {
    color: 'blue',
    cursor: 'pointer'
};
var EmployeeList = /** @class */ (function (_super) {
    __extends(EmployeeList, _super);
    function EmployeeList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { empList: [], loading: true };
        fetch('api/Employee/GetAll')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ empList: data, loading: false });
        });
        _this.handleDelete = _this.handleDelete.bind(_this);
        _this.handleEdit = _this.handleEdit.bind(_this);
        return _this;
    }
    EmployeeList.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderEmployeeTable(this.state.empList);
        return React.createElement("div", null,
            React.createElement("h2", null, "Employee List"),
            React.createElement("p", null,
                React.createElement(react_router_dom_1.Link, { to: "/addEmployee" }, "Add New Employee")),
            contents);
    };
    EmployeeList.prototype.handleDelete = function (id) {
        //if (!confirm("Do you want to delete employee with Id: " + id))
        //    return;
        var _this = this;
        //else {
        fetch('api/Employee/Delete/' + id, {
            method: 'delete'
        }).then(function (data) {
            _this.setState({
                empList: _this.state.empList.filter(function (rec) {
                    return (rec.employeeId != id);
                })
            });
            _this.props.history.push("/employeeList");
        });
        //}
    };
    EmployeeList.prototype.handleEdit = function (id) {
        this.props.history.push("/employee/edit/" + id);
    };
    EmployeeList.prototype.renderEmployeeTable = function (empList) {
        var _this = this;
        return React.createElement("table", { className: 'table table-condensed table-bordered' },
            React.createElement("thead", { className: 'thead-light' },
                React.createElement("tr", null,
                    React.createElement("th", null, "Employee Id"),
                    React.createElement("th", null, "Name"),
                    React.createElement("th", null, "Gender"),
                    React.createElement("th", null, "Contact #"),
                    React.createElement("th", null, "Address"),
                    React.createElement("th", null, "City"),
                    React.createElement("th", null, "Country"),
                    React.createElement("th", null, "Zip Code"),
                    React.createElement("th", null, "Department"),
                    React.createElement("th", null, "Designation"),
                    React.createElement("th", null))),
            React.createElement("tbody", null, empList.map(function (emp) {
                return React.createElement("tr", { key: emp.employeeId },
                    React.createElement("td", null, emp.employeeId),
                    React.createElement("td", null, emp.name),
                    React.createElement("td", null, emp.gender),
                    React.createElement("td", null, emp.contactNumber),
                    React.createElement("td", null, emp.streetAddress),
                    React.createElement("td", null, emp.city),
                    React.createElement("td", null, emp.country),
                    React.createElement("td", null, emp.zipCode),
                    React.createElement("td", null, emp.department),
                    React.createElement("td", null, emp.designation),
                    React.createElement("td", null,
                        React.createElement("a", { className: "action", style: linkStyle, onClick: function (id) { return _this.handleEdit(emp.employeeId); } }, "Edit"),
                        "  |",
                        React.createElement("a", { className: "action", style: linkStyle, onClick: function (id) { return _this.handleDelete(emp.employeeId); } }, "Delete")));
            })));
    };
    return EmployeeList;
}(React.Component));
exports.EmployeeList = EmployeeList;
var EmployeeData = /** @class */ (function () {
    function EmployeeData() {
        this.employeeId = 0;
        this.name = "";
        this.streetAddress = "";
        this.gender = "";
        this.city = "";
        this.country = "";
        this.zipCode = "";
        this.department = "";
        this.contactNumber = "";
        this.designation = "";
        this.dateCreated = new Date();
    }
    return EmployeeData;
}());
exports.EmployeeData = EmployeeData;
//# sourceMappingURL=EmployeeList.js.map