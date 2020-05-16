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
var DeliveryList = /** @class */ (function (_super) {
    __extends(DeliveryList, _super);
    function DeliveryList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { deliveryList: [], loading: true };
        fetch('api/Delivery/GetAll')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ deliveryList: data, loading: false });
        });
        _this.handleDelete = _this.handleDelete.bind(_this);
        _this.handleEdit = _this.handleEdit.bind(_this);
        return _this;
    }
    DeliveryList.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderDeliveryTable(this.state.deliveryList);
        return React.createElement("div", null,
            React.createElement("h2", null, "Delivery List"),
            React.createElement("p", null,
                React.createElement(react_router_dom_1.Link, { to: "/addDelivery" }, "Add New Delivery")),
            contents);
    };
    DeliveryList.prototype.handleDelete = function (id) {
        var _this = this;
        fetch('api/Delivery/Delete/' + id, {
            method: 'delete'
        }).then(function (data) {
            _this.setState({
                deliveryList: _this.state.deliveryList.filter(function (rec) {
                    return (rec.deliveryId != id);
                })
            });
            _this.props.history.push("/deliveryList");
        });
    };
    DeliveryList.prototype.handleEdit = function (id) {
        this.props.history.push("/delivery/edit/" + id);
    };
    DeliveryList.prototype.renderDeliveryTable = function (deliveryList) {
        var _this = this;
        return React.createElement("table", { className: 'table table-condensed table-bordered' },
            React.createElement("thead", { className: 'thead-light' },
                React.createElement("tr", null,
                    React.createElement("th", null),
                    React.createElement("th", null, "Delivery Id"),
                    React.createElement("th", null, "Destination"),
                    React.createElement("th", null, "Origin"),
                    React.createElement("th", null, "Courier"),
                    React.createElement("th", null, "Delivery Date"),
                    React.createElement("th", null, "Item Details"),
                    React.createElement("th", null, "Receiver Name"),
                    React.createElement("th", null, "Receiver Address"),
                    React.createElement("th", null, "Receiver Contact #"),
                    React.createElement("th", null, "Email Address"),
                    React.createElement("th", null, "Sender Name"),
                    React.createElement("th", null, "Sender Address"),
                    React.createElement("th", null, "Sender Contact #"),
                    React.createElement("th", null, "Status"),
                    React.createElement("th", null, "Rate"),
                    React.createElement("th", null, "Staff Name"),
                    React.createElement("th", null, "Contact #"))),
            React.createElement("tbody", null, deliveryList.map(function (del) {
                return React.createElement("tr", { key: del.deliveryId },
                    React.createElement("td", null,
                        React.createElement("a", { className: "action", style: linkStyle, onClick: function (id) { return _this.handleEdit(del.deliveryId); } }, "Edit"),
                        "  |",
                        React.createElement("a", { className: "action", style: linkStyle, onClick: function (id) { return _this.handleDelete(del.deliveryId); } }, "Delete")),
                    React.createElement("td", null, del.deliveryId),
                    React.createElement("td", null, del.destination),
                    React.createElement("td", null, del.origin),
                    React.createElement("td", null, del.courierType),
                    React.createElement("td", null, del.deliveryDate),
                    React.createElement("td", null, del.itemDetails),
                    React.createElement("td", null, del.receiverName),
                    React.createElement("td", null, del.receiverAddress),
                    React.createElement("td", null, del.receiverContactNumber),
                    React.createElement("td", null, del.emailAddress),
                    React.createElement("td", null, del.senderName),
                    React.createElement("td", null, del.senderAddress),
                    React.createElement("td", null, del.senderContactNumber),
                    React.createElement("td", null, del.deliveryStatus),
                    React.createElement("td", null, del.rate),
                    React.createElement("td", null, del.staffName),
                    React.createElement("td", null, del.contactNumber));
            })));
    };
    return DeliveryList;
}(React.Component));
exports.DeliveryList = DeliveryList;
var DeliveryData = /** @class */ (function () {
    function DeliveryData() {
        this.deliveryId = 0;
        this.destination = "";
        this.origin = "";
        this.courierId = "";
        this.courierType = "";
        this.deliveryDate = new Date();
        this.itemDetails = "";
        this.receiverName = "";
        this.receiverAddress = "";
        this.receiverContactNumber = "";
        this.emailAddress = "";
        this.senderId = 0;
        this.senderName = "";
        this.senderAddress = "";
        this.senderContactNumber = "";
        this.rate = "";
        this.staffName = "";
        this.contactNumber = "";
        this.deliveryStatus = "";
    }
    return DeliveryData;
}());
exports.DeliveryData = DeliveryData;
//# sourceMappingURL=DeliveryList.js.map