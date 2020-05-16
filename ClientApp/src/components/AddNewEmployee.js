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
var EmployeeList_1 = require("./EmployeeList");
var AddNewEmployee = /** @class */ (function (_super) {
    __extends(AddNewEmployee, _super);
    function AddNewEmployee(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { title: "", loading: true, empData: new EmployeeList_1.EmployeeData };
        var empid = _this.props.match.params["id"];
        if (empid > 0) {
            fetch('api/Employee/Details/' + empid)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                _this.setState({ title: "Edit", loading: false, empData: data });
            });
        }
        else {
            _this.state = { title: "Create", loading: false, empData: new EmployeeList_1.EmployeeData };
        }
        _this.handleSave = _this.handleSave.bind(_this);
        _this.handleCancel = _this.handleCancel.bind(_this);
        return _this;
    }
    AddNewEmployee.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderCreateForm();
        return React.createElement("div", null,
            React.createElement("h1", null, this.state.title),
            React.createElement("h3", null, "Employee"),
            React.createElement("hr", null),
            contents);
    };
    AddNewEmployee.prototype.handleSave = function (event) {
        var _this = this;
        event.preventDefault();
        var data = new FormData(event.target);
        if (this.state.empData.employeeId) {
            fetch('api/Employee/Edit', {
                method: 'PUT',
                body: data,
            }).then(function (response) { return response.json(); })
                .then(function (responseJson) {
                _this.props.history.push("/employeeList");
            });
        }
        else {
            fetch('api/Employee/Create', {
                method: 'POST',
                body: data,
            }).then(function (response) { return response.json(); })
                .then(function (responseJson) {
                _this.props.history.push("/employeeList");
            });
        }
    };
    AddNewEmployee.prototype.handleCancel = function (e) {
        e.preventDefault();
        this.props.history.push("/employeeList");
    };
    AddNewEmployee.prototype.renderCreateForm = function () {
        return (React.createElement("form", { className: 'form-horizontal', onSubmit: this.handleSave },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: 'col-sm-6' },
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("input", { type: "hidden", name: "employeeId", value: this.state.empData.employeeId })),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: " control-label col-md-12", htmlFor: "Name" }, "Name"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "name", defaultValue: this.state.empData.name, required: true }))),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: "control-label col-md-12", htmlFor: "Gender" }, "Gender"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("select", { className: "form-control", "data-val": "true", name: "gender", defaultValue: this.state.empData.gender, required: true },
                                React.createElement("option", { value: "" }, "-- Select Gender --"),
                                React.createElement("option", { value: "Male" }, "Male"),
                                React.createElement("option", { value: "Female" }, "Female")))),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: " control-label col-md-12", htmlFor: "streetAddress" }, "Street Adress"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "streetAddress", defaultValue: this.state.empData.streetAddress, required: true }))),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: " control-label col-md-12", htmlFor: "city" }, "City"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "city", defaultValue: this.state.empData.city, required: true }))),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: " control-label col-md-12", htmlFor: "zipCode" }, "Zip Code"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "zipCode", defaultValue: this.state.empData.zipCode, required: true }))),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: " control-label col-md-12", htmlFor: "country" }, "Country"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "country", defaultValue: this.state.empData.country, required: true })))),
                React.createElement("div", { className: 'col-sm-6' },
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: "control-label col-md-12", htmlFor: "Department" }, "Department"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "Department", defaultValue: this.state.empData.department, required: true }))),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: "control-label col-md-12", htmlFor: "contactNumber" }, "Contact #"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "contactNumber", defaultValue: this.state.empData.contactNumber, required: true }))),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: "control-label col-md-12", htmlFor: "designation" }, "Designation"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "designation", defaultValue: this.state.empData.designation, required: true }))),
                    React.createElement("div", { className: "form-group" },
                        React.createElement("button", { type: "submit", className: "btn btn-default" }, "Save"),
                        "\u00A0\u00A0\u00A0",
                        React.createElement("button", { className: "btn btn-danger", onClick: this.handleCancel }, "Cancel"))))));
    };
    return AddNewEmployee;
}(React.Component));
exports.AddNewEmployee = AddNewEmployee;
//# sourceMappingURL=AddNewEmployee.js.map