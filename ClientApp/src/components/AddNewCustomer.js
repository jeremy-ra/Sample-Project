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
var CustomerList_1 = require("./CustomerList");
var AddNewCustomer = /** @class */ (function (_super) {
    __extends(AddNewCustomer, _super);
    function AddNewCustomer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { title: "", loading: true, customerData: new CustomerList_1.CustomerData };
        var empid = _this.props.match.params["id"];
        if (empid > 0) {
            fetch('api/Customer/Details/' + empid)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                _this.setState({ title: "Edit", loading: false, customerData: data });
            });
        }
        else {
            _this.state = { title: "Add", loading: false, customerData: new CustomerList_1.CustomerData };
        }
        _this.handleSave = _this.handleSave.bind(_this);
        _this.handleCancel = _this.handleCancel.bind(_this);
        return _this;
    }
    AddNewCustomer.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderCreateForm();
        return React.createElement("div", null,
            React.createElement("h4", null, this.state.title),
            React.createElement("h4", null, "Customer"),
            React.createElement("hr", null),
            contents);
    };
    AddNewCustomer.prototype.handleSave = function (event) {
        var _this = this;
        event.preventDefault();
        var data = new FormData(event.target);
        if (this.state.customerData.customerId) {
            fetch('api/Customer/Edit', {
                method: 'PUT',
                body: data,
            }).then(function (response) { return response.json(); })
                .then(function (responseJson) {
                _this.props.history.push("/customerList");
            });
        }
        else {
            fetch('api/Customer/Create', {
                method: 'POST',
                body: data,
            }).then(function (response) { return response.json(); })
                .then(function (responseJson) {
                _this.props.history.push("/customerList");
            });
        }
    };
    AddNewCustomer.prototype.handleCancel = function (e) {
        e.preventDefault();
        this.props.history.push("/customerList");
    };
    AddNewCustomer.prototype.renderCreateForm = function () {
        return (React.createElement("form", { className: 'form-horizontal', onSubmit: this.handleSave },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: 'col-sm-6' },
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("input", { type: "hidden", name: "customerId", value: this.state.customerData.customerId })),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: " control-label col-md-12", htmlFor: "Name" }, "Name"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "name", defaultValue: this.state.customerData.name, required: true }))),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: "control-label col-md-12", htmlFor: "Gender" }, "Gender"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("select", { className: "form-control", "data-val": "true", name: "gender", defaultValue: this.state.customerData.gender, required: true },
                                React.createElement("option", { value: "" }, "-- Select Gender --"),
                                React.createElement("option", { value: "Male" }, "Male"),
                                React.createElement("option", { value: "Female" }, "Female")))),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: " control-label col-md-12", htmlFor: "streetAddress" }, "Street Adress"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "streetAddress", defaultValue: this.state.customerData.streetAddress, required: true }))),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: " control-label col-md-12", htmlFor: "city" }, "City"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "city", defaultValue: this.state.customerData.city, required: true }))),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: " control-label col-md-12", htmlFor: "zipCode" }, "Zip Code"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "zipCode", defaultValue: this.state.customerData.zipCode, required: true })))),
                React.createElement("div", { className: 'col-sm-6' },
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: "control-label col-md-12", htmlFor: "emailAddress" }, "Email Address"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "emailAddress", defaultValue: this.state.customerData.emailAddress, required: true }))),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: "control-label col-md-12", htmlFor: "contactNumber" }, "Contact #"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "contactNumber", defaultValue: this.state.customerData.contactNumber, required: true }))),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: " control-label col-md-12", htmlFor: "country" }, "Country"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "country", defaultValue: this.state.customerData.country, required: true }))),
                    React.createElement("div", { className: "form-group" },
                        React.createElement("button", { type: "submit", className: "btn btn-default" }, "Save"),
                        "\u00A0\u00A0\u00A0",
                        React.createElement("button", { className: "btn btn-danger", onClick: this.handleCancel }, "Cancel"))))));
    };
    return AddNewCustomer;
}(React.Component));
exports.AddNewCustomer = AddNewCustomer;
//# sourceMappingURL=AddNewCustomer.js.map