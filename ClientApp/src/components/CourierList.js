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
var CourierList = /** @class */ (function (_super) {
    __extends(CourierList, _super);
    function CourierList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { courierList: [], loading: true };
        fetch('api/Courier/GetAll')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ courierList: data, loading: false });
        });
        _this.handleDelete = _this.handleDelete.bind(_this);
        _this.handleEdit = _this.handleEdit.bind(_this);
        return _this;
    }
    CourierList.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderCourierTable(this.state.courierList);
        return React.createElement("div", null,
            React.createElement("h2", null, "Courier List"),
            React.createElement("p", null,
                React.createElement(react_router_dom_1.Link, { to: "/addCourier" }, "Add New Courier")),
            contents);
    };
    CourierList.prototype.handleDelete = function (id) {
        var _this = this;
        fetch('api/Courier/Delete/' + id, {
            method: 'delete'
        }).then(function (data) {
            _this.setState({
                courierList: _this.state.courierList.filter(function (rec) {
                    return (rec.courierId != id);
                })
            });
            _this.props.history.push("/courierList");
        });
    };
    CourierList.prototype.handleEdit = function (id) {
        this.props.history.push("/courier/edit/" + id);
    };
    CourierList.prototype.renderCourierTable = function (courierList) {
        var _this = this;
        return React.createElement("table", { className: 'table table-condensed table-bordered' },
            React.createElement("thead", { className: 'thead-light' },
                React.createElement("tr", null,
                    React.createElement("th", null, "Courier Id"),
                    React.createElement("th", null, "Name"),
                    React.createElement("th", null, "Description"),
                    React.createElement("th", null))),
            React.createElement("tbody", null, courierList.map(function (cor) {
                return React.createElement("tr", { key: cor.courierId },
                    React.createElement("td", null, cor.courierId),
                    React.createElement("td", null, cor.courierType),
                    React.createElement("td", null, cor.description),
                    React.createElement("td", null,
                        React.createElement("a", { className: "action", style: linkStyle, onClick: function (id) { return _this.handleEdit(cor.courierId); } }, "Edit"),
                        "  |",
                        React.createElement("a", { className: "action", style: linkStyle, onClick: function (id) { return _this.handleDelete(cor.courierId); } }, "Delete")));
            })));
    };
    return CourierList;
}(React.Component));
exports.CourierList = CourierList;
var CourierData = /** @class */ (function () {
    function CourierData() {
        this.courierId = 0;
        this.courierType = "";
        this.description = "";
    }
    return CourierData;
}());
exports.CourierData = CourierData;
//# sourceMappingURL=CourierList.js.map