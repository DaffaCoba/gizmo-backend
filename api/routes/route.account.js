"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_account_js_1 = __importDefault(require("../controllers/controller.account.js"));
const helper_authorization_js_1 = require("../helpers/helper.authorization.js");
const AccountRouter = (0, express_1.Router)();
AccountRouter.get('/accounts', helper_authorization_js_1.authCheck, controller_account_js_1.default.getAllAccount);
AccountRouter.get('/accounts/:accountId', helper_authorization_js_1.authCheck, controller_account_js_1.default.getAccountById);
AccountRouter.post('/accounts/login', controller_account_js_1.default.loginAccount);
AccountRouter.post('/accounts/create', controller_account_js_1.default.createAccount);
AccountRouter.put('/accounts/:accountId', helper_authorization_js_1.authCheck, controller_account_js_1.default.updateAccount);
AccountRouter.delete('/accounts/:accountId', helper_authorization_js_1.authCheck, controller_account_js_1.default.deleteAccount);
exports.default = AccountRouter;
//# sourceMappingURL=route.account.js.map