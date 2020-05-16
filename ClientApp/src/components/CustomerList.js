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
var CustomerList = /** @class */ (function (_super) {
    __extends(CustomerList, _super);
    function CustomerList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { customerList: [], loading: true };
        fetch('api/Customer/GetAll')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ customerList: data, loading: false });
        });
        _this.handleDelete = _this.handleDelete.bind(_this);
        _this.handleEdit = _this.handleEdit.bind(_this);
        _this.handleAddDelivery = _this.handleAddDelivery.bind(_this);
        return _this;
    }
    CustomerList.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderCustomerTable(this.state.customerList);
        return React.createElement("div", null,
            React.createElement("h2", null, "Customer List"),
            React.createElement("p", null,
                React.createElement(react_router_dom_1.Link, { to: "/addCustomer" }, "Add New Customer")),
            contents);
    };
    CustomerList.prototype.handleDelete = function (id) {
        var _this = this;
        fetch('api/Customer/Delete/' + id, {
            method: 'delete'
        }).then(function (data) {
            _this.setState({
                customerList: _this.state.customerList.filter(function (rec) {
                    return (rec.customerId != id);
                })
            });
            _this.props.history.push("/customerList");
        });
    };
    CustomerList.prototype.handleEdit = function (id) {
        this.props.history.push("/customer/edit/" + id);
    };
    CustomerList.prototype.handleAddDelivery = function () {
        this.props.history.push("/addDelivery");
    };
    CustomerList.prototype.renderCustomerTable = function (customerList) {
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
                    React.createElement("th", null, "Email Address"),
                    React.createElement("th", null),
                    React.createElement("th", null))),
            React.createElement("tbody", null, customerList.map(function (cus) {
                return React.createElement("tr", { key: cus.customerId },
                    React.createElement("td", null, cus.customerId),
                    React.createElement("td", null, cus.name),
                    React.createElement("td", null, cus.gender),
                    React.createElement("td", null, cus.contactNumber),
                    React.createElement("td", null, cus.streetAddress),
                    React.createElement("td", null, cus.city),
                    React.createElement("td", null, cus.country),
                    React.createElement("td", null, cus.zipCode),
                    React.createElement("td", null, cus.emailAddress),
                    React.createElement("td", null,
                        React.createElement("a", { className: "action", style: linkStyle, onClick: function (id) { return _this.handleEdit(cus.customerId); } }, "Edit"),
                        "  |",
                        React.createElement("a", { className: "action", style: linkStyle, onClick: function (id) { return _this.handleDelete(cus.customerId); } }, "Delete")),
                    React.createElement("td", null,
                        React.createElement("a", { className: "action", style: linkStyle, onClick: function (id) { return _this.handleAddDelivery(); } }, "Add Delivery")));
            })));
    };
    return CustomerList;
}(React.Component));
exports.CustomerList = CustomerList;
var CustomerData = /** @class */ (function () {
    function CustomerData() {
        this.customerId = 0;
        this.name = "";
        this.streetAddress = "";
        this.gender = "";
        this.city = "";
        this.country = "";
        this.zipCode = "";
        this.contactNumber = "";
        this.emailAddress = "";
    }
    return CustomerData;
}());
exports.CustomerData = CustomerData;
//# sourceMappingURL=CustomerList.js.map