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
var DeliveryList_1 = require("./DeliveryList");
var AddNewDelivery = /** @class */ (function (_super) {
    __extends(AddNewDelivery, _super);
    function AddNewDelivery(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { title: "", loading: true, courierList: [], deliveryData: new DeliveryList_1.DeliveryData };
        fetch('api/Courier/GetAll')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ courierList: data });
        });
        var empid = _this.props.match.params["id"];
        if (empid > 0) {
            fetch('api/Delivery/Details/' + empid)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                _this.setState({ title: "Edit", loading: false, deliveryData: data });
            });
        }
        else {
            _this.state = { title: "Add", loading: false, courierList: [], deliveryData: new DeliveryList_1.DeliveryData };
        }
        _this.handleSave = _this.handleSave.bind(_this);
        _this.handleCancel = _this.handleCancel.bind(_this);
        return _this;
    }
    AddNewDelivery.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderCreateForm(this.state.courierList);
        return React.createElement("div", null,
            React.createElement("h4", null, this.state.title),
            React.createElement("h4", null, "Delivery"),
            React.createElement("hr", null),
            contents);
    };
    AddNewDelivery.prototype.handleSave = function (event) {
        var _this = this;
        event.preventDefault();
        var data = new FormData(event.target);
        if (this.state.deliveryData.deliveryId) {
            fetch('api/Delivery/Edit', {
                method: 'PUT',
                body: data,
            }).then(function (response) { return response.json(); })
                .then(function (responseJson) {
                _this.props.history.push("/deliveryList");
            });
        }
        else {
            fetch('api/Delivery/Create', {
                method: 'POST',
                body: data,
            }).then(function (response) { return response.json(); })
                .then(function (responseJson) {
                _this.props.history.push("/deliveryList");
            });
        }
    };
    AddNewDelivery.prototype.handleCancel = function (e) {
        e.preventDefault();
        this.props.history.push("/deliveryList");
    };
    AddNewDelivery.prototype.renderCreateForm = function (courierList) {
        return (React.createElement("form", { className: 'form-horizontal', onSubmit: this.handleSave },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: 'col-sm-6' },
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("input", { type: "hidden", name: "deliveryId", value: this.state.deliveryData.deliveryId })),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: " control-label col-md-12", htmlFor: "destination" }, "Destination"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "destination", defaultValue: this.state.deliveryData.destination, required: true }))),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: " control-label col-md-12", htmlFor: "origin" }, "Origin"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "origin", defaultValue: this.state.deliveryData.origin, required: true }))),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: "control-label col-md-12", htmlFor: "courierType" }, "Courier Type"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("select", { className: "form-control", "data-val": "true", name: "courierType", defaultValue: this.state.deliveryData.courierType, required: true },
                                React.createElement("option", { value: "" }, "-- Select Courier Type --"),
                                courierList.map(function (cor) {
                                    return React.createElement("option", { key: cor.courierId, value: cor.courierType }, cor.courierType);
                                })))),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: " control-label col-md-12", htmlFor: "deliveryDate" }, "Delivery Date"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "date", name: "deliveryDate", defaultValue: this.state.deliveryData.deliveryDate.toString(), required: true }))),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: " control-label col-md-12", htmlFor: "itemDetails" }, "Item Details/Content"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "itemDetails", defaultValue: this.state.deliveryData.itemDetails, required: true }))),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: " control-label col-md-12", htmlFor: "receiverName" }, "Receiver Name"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "receiverName", defaultValue: this.state.deliveryData.receiverName, required: true }))),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: " control-label col-md-12", htmlFor: "receiverAddress" }, "Receiver Address"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "receiverAddress", defaultValue: this.state.deliveryData.receiverAddress, required: true }))),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: " control-label col-md-12", htmlFor: "receiverContactNumber" }, "Receiver Contact #"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "receiverContactNumber", defaultValue: this.state.deliveryData.receiverContactNumber, required: true }))),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: " control-label col-md-12", htmlFor: "emailAddress" }, "Email Address"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "emailAddress", defaultValue: this.state.deliveryData.emailAddress })))),
                React.createElement("div", { className: 'col-sm-6' },
                    React.createElement("div", { className: "form-group row" }),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: "control-label col-md-12", htmlFor: "senderName" }, "Sender Name"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "senderName", defaultValue: this.state.deliveryData.senderName, required: true }))),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: "control-label col-md-12", htmlFor: "senderAddress" }, "Sender Address"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "senderAddress", defaultValue: this.state.deliveryData.senderAddress, required: true }))),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: " control-label col-md-12", htmlFor: "senderContactNumber" }, "Sender Contact #"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "senderContactNumber", defaultValue: this.state.deliveryData.senderContactNumber, required: true }))),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: " control-label col-md-12", htmlFor: "rate" }, "Rate"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "rate", defaultValue: this.state.deliveryData.rate }))),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: " control-label col-md-12", htmlFor: "staffName" }, "Staff Name"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "staffName", defaultValue: this.state.deliveryData.staffName, required: true }))),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: " control-label col-md-12", htmlFor: "contactNumber" }, "Contact Number"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "contactNumber", defaultValue: this.state.deliveryData.contactNumber, required: true }))),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: " control-label col-md-12", htmlFor: "deliveryStatus" }, "Delivery Status"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("select", { className: "form-control", "data-val": "true", name: "deliveryStatus", defaultValue: this.state.deliveryData.deliveryStatus, required: true },
                                React.createElement("option", { value: "" }, "-- Select Status --"),
                                React.createElement("option", { value: "Processing" }, "Processing"),
                                React.createElement("option", { value: "Canceled" }, "Canceled"),
                                React.createElement("option", { value: "Reschedule" }, "Delivered"),
                                React.createElement("option", { value: "Shipped" }, "Shipped"),
                                React.createElement("option", { value: "In Transit" }, "In Transit"),
                                React.createElement("option", { value: "Arrived" }, "Arrived"),
                                React.createElement("option", { value: "Delivered" }, "Delivered")))),
                    React.createElement("div", { className: "form-group" },
                        React.createElement("button", { type: "submit", className: "btn btn-default" }, "Save"),
                        "\u00A0\u00A0\u00A0",
                        React.createElement("button", { className: "btn btn-danger", onClick: this.handleCancel }, "Cancel"))))));
    };
    return AddNewDelivery;
}(React.Component));
exports.AddNewDelivery = AddNewDelivery;
//# sourceMappingURL=AddNewDelivery.js.map