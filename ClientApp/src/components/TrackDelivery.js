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
var TrackDelivery = /** @class */ (function (_super) {
    __extends(TrackDelivery, _super);
    function TrackDelivery(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { title: "", deliveryDetail: new DeliveryList_1.DeliveryData, loading: false, deliveryId: null };
        _this.handleSearch = _this.handleSearch.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    TrackDelivery.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderSearchForm();
        return React.createElement("div", null,
            React.createElement("h4", null, this.state.title),
            React.createElement("h4", null, "Track Delivery"),
            React.createElement("hr", null),
            contents);
    };
    TrackDelivery.prototype.handleSearch = function (id) {
        var _this = this;
        if (id > 0) {
            fetch('api/Delivery/Details/' + id)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                _this.setState({ title: "View", loading: false, deliveryDetail: data, deliveryId: id });
                if (data.deliveryId > 0) {
                    alert("Delivery details found");
                    _this.props.history.push("/delivery/edit/" + id);
                }
                else
                    alert("No delivery details found");
            });
        }
        else
            alert("Please enter Delivery Id reference.");
    };
    TrackDelivery.prototype.handleChange = function (_a) {
        var target = _a.target;
        this.setState({ title: "Search", loading: false, deliveryDetail: new DeliveryList_1.DeliveryData, deliveryId: target.value });
    };
    TrackDelivery.prototype.renderSearchForm = function () {
        var _this = this;
        return (React.createElement("div", { className: "input-group" },
            React.createElement("input", { type: "text", className: "form-control", name: "deliveryId", value: this.state.deliveryId, onChange: this.handleChange, placeholder: "Enter Delivery Id or Reference Id  here", required: true }),
            React.createElement("div", { className: "input-group-append" },
                React.createElement("button", { className: "btn btn-secondary", type: "button", onClick: function (id) { return _this.handleSearch(_this.state.deliveryId); } },
                    "Search",
                    React.createElement("i", { className: "fa fa-search" })))));
    };
    return TrackDelivery;
}(React.Component));
exports.TrackDelivery = TrackDelivery;
//# sourceMappingURL=TrackDelivery.js.map