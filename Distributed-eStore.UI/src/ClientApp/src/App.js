"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_1 = require("react-router");
var Layout_1 = require("./components/Layout");
var ProductList_1 = require("./containers/ProductList/ProductList");
var Register_1 = require("./containers/Register/Register");
var Login_1 = require("./containers/Login/Login");
var Cart_1 = require("./containers/Cart/Cart");
var ProductView_1 = require("./containers/ProductView/ProductView");
var Logout_1 = require("./components/user/Logout");
exports.default = (function () { return (React.createElement(Layout_1.default, null,
    React.createElement(react_router_1.Route, { exact: true, path: '/', component: ProductList_1.default }),
    React.createElement(react_router_1.Route, { exact: true, path: '/register', component: Register_1.default }),
    React.createElement(react_router_1.Route, { exact: true, path: '/login', component: Login_1.default }),
    React.createElement(react_router_1.Route, { exact: true, path: '/logout', component: Logout_1.default }),
    React.createElement(react_router_1.Route, { exact: true, path: '/cart', component: Cart_1.default }),
    React.createElement(react_router_1.Route, { exact: true, path: '/products/:productId', component: ProductView_1.default }))); });
//# sourceMappingURL=App.js.map