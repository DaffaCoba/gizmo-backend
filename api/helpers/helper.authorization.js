"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authCheck = exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const helper_error_js_1 = __importDefault(require("../helpers/helper.error.js"));
const model_account_js_1 = __importDefault(require("../models/model.account.js"));
const account = new model_account_js_1.default();
const generateToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, { expiresIn: '9999d' });
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    return jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
};
exports.verifyToken = verifyToken;
const authCheck = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return helper_error_js_1.default.Unauthorized(res, res, 'Unauthorized: Token not sent');
    }
    const getToken = token.split(' ')[1];
    try {
        const decoded = verifyToken(getToken);
        req.account = decoded;
        next();
    }
    catch (error) {
        return helper_error_js_1.default.Unauthorized(req, res, 'Unauthorized: you are not authorized');
    }
};
exports.authCheck = authCheck;
//# sourceMappingURL=helper.authorization.js.map