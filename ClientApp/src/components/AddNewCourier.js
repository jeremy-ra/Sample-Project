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
var CourierList_1 = require("./CourierList");
var AddNewCourier = /** @class */ (function (_super) {
    __extends(AddNewCourier, _super);
    function AddNewCourier(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { title: "", loading: true, courierData: new CourierList_1.CourierData };
        var empid = _this.props.match.params["id"];
        if (empid > 0) {
            fetch('api/Courier/Details/' + empid)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                _this.setState({ title: "Edit", loading: false, courierData: data });
            });
        }
        else {
            _this.state = { title: "Create", loading: false, courierData: new CourierList_1.CourierData };
        }
        _this.handleSave = _this.handleSave.bind(_this);
        _this.handleCancel = _this.handleCancel.bind(_this);
        return _this;
    }
    AddNewCourier.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderCreateForm();
        return React.createElement("div", null,
            React.createElement("h1", null, this.state.title),
            React.createElement("h3", null, "Courier"),
            React.createElement("hr", null),
            contents);
    };
    AddNewCourier.prototype.handleSave = function (event) {
        var _this = this;
        event.preventDefault();
        var data = new FormData(event.target);
        if (this.state.courierData.courierId) {
            fetch('api/Courier/Edit', {
                method: 'PUT',
                body: data,
            }).then(function (response) { return response.json(); })
                .then(function (responseJson) {
                _this.props.history.push("/courierList");
            });
        }
        else {
            fetch('api/Courier/Create', {
                method: 'POST',
                body: data,
            }).then(function (response) { return response.json(); })
                .then(function (responseJson) {
                _this.props.history.push("/courierList");
            });
        }
    };
    AddNewCourier.prototype.handleCancel = function (e) {
        e.preventDefault();
        this.props.history.push("/courierList");
    };
    AddNewCourier.prototype.renderCreateForm = function () {
        return (React.createElement("form", { className: 'form-horizontal', onSubmit: this.handleSave },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: 'col-sm-6' },
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("input", { type: "hidden", name: "courierId", value: this.state.courierData.courierId })),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: " control-label col-md-12", htmlFor: "courierType" }, "Name"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "courierType", defaultValue: this.state.courierData.courierType, required: true }))),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: " control-label col-md-12", htmlFor: "description" }, "Description"),
                        React.createElement("div", { className: "col-md-8" },
                            React.createElement("input", { className: "form-control", type: "text", name: "description", defaultValue: this.state.courierData.description, required: true }))),
                    React.createElement("div", { className: "form-group" },
                        React.createElement("button", { type: "submit", className: "btn btn-default" }, "Save"),
                        "\u00A0\u00A0\u00A0",
                        React.createElement("button", { className: "btn btn-danger", onClick: this.handleCancel }, "Cancel"))))));
    };
    return AddNewCourier;
}(React.Component));
exports.AddNewCourier = AddNewCourier;
//# sourceMappingURL=AddNewCourier.js.map