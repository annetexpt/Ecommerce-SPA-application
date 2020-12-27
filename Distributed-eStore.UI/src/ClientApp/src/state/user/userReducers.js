"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var userData = localStorage.getItem("user");
var initialState = userData
    ? { isLoggedIn: true, user: JSON.parse(userData) }
    : { isLoggedIn: false, user: {} };
function default_1(state, incomingAction) {
    if (state === void 0) { state = initialState; }
    var _a = incomingAction, type = _a.type, payload = _a.payload;
    switch (type) {
        case _1.UserActionTypes.REGISTRATION_SUCCESS:
            return __assign(__assign({}, state), { isLoggedIn: false });
        case _1.UserActionTypes.REGISTRATION_FAILED:
            return __assign(__assign({}, state), { isLoggedIn: false });
        case _1.UserActionTypes.LOGIN_SUCCESS:
            return __assign(__assign({}, state), { isLoggedIn: true, user: payload.user });
        case _1.UserActionTypes.LOGIN_FAIL:
            return __assign(__assign({}, state), { isLoggedIn: false, user: null });
        case _1.UserActionTypes.LOGOUT:
            return __assign(__assign({}, state), { isLoggedIn: false, user: null });
        default:
            return state;
    }
}
exports.default = default_1;
//# sourceMappingURL=userReducers.js.map