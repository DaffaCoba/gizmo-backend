"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_account_js_1 = __importDefault(require("../models/model.account.js"));
const helper_error_js_1 = __importDefault(require("../helpers/helper.error.js"));
const helper_success_js_1 = __importDefault(require("../helpers/helper.success.js"));
const helper_validation_js_1 = __importDefault(require("../helpers/helper.validation.js"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const helper_authorization_js_1 = require("../helpers/helper.authorization.js");
const account = new model_account_js_1.default();
class AccountController {
    static async getAllAccount(req, res) {
        try {
            const result = await account.getAll();
            return helper_success_js_1.default.DataFound(req, res, 'Account found', result);
        }
        catch (error) {
            return helper_error_js_1.default.InternalServer(req, res, error.message);
        }
    }
    static async getAccountById(req, res) {
        try {
            const accountId = req.params.accountId;
            const result = await account.getById(accountId);
            return helper_success_js_1.default.DataFound(req, res, 'A Account found', result);
        }
        catch (error) {
            return helper_error_js_1.default.InternalServer(req, res, error.message);
        }
    }
    static async loginAccount(req, res) {
        try {
            const data = req.body;
            const { error } = await helper_validation_js_1.default.createAccount(data);
            if (error) {
                return helper_error_js_1.default.Unauthorized(req, res, error.details[0].message);
            }
            const result = await account.getByUsername(data);
            if (!result) {
                return helper_error_js_1.default.Unauthorized(req, res, 'Invalid username or password');
            }
            const comparePassword = await bcryptjs_1.default.compare(data.password, result.password);
            if (!comparePassword) {
                return helper_error_js_1.default.Unauthorized(req, res, 'Invalid username or password');
            }
            const token = (0, helper_authorization_js_1.generateToken)({ id: result.id });
            return helper_success_js_1.default.DataFound(req, res, 'Login Successfull', token);
        }
        catch (error) {
            return helper_error_js_1.default.InternalServer(req, res, error.message);
        }
    }
    static async createAccount(req, res) {
        try {
            const data = req.body;
            const { error } = await helper_validation_js_1.default.createAccount(data);
            if (error) {
                return helper_error_js_1.default.BadRequest(req, res, error.details[0].message);
            }
            const result = await account.create(data);
            return helper_success_js_1.default.DataFound(req, res, 'New Account Created', result);
        }
        catch (error) {
            return helper_error_js_1.default.InternalServer(req, res, error.message);
        }
    }
    static async updateAccount(req, res) {
        try {
            const accountId = req.params.accountId;
            const data = req.body;
            await helper_validation_js_1.default.createAccount(data);
            const result = await account.update(accountId, data);
            return helper_success_js_1.default.DataFound(req, res, 'Existing Account Updated', result);
        }
        catch (error) {
            return helper_error_js_1.default.InternalServer(req, res, error.message);
        }
    }
    static async deleteAccount(req, res) {
        try {
            const accountId = req.params.accountId;
            const result = await account.getById(accountId);
            return helper_success_js_1.default.DataFound(req, res, 'Account Deleted', result);
        }
        catch (error) {
            return helper_error_js_1.default.InternalServer(req, res, error.message);
        }
    }
}
exports.default = AccountController;
//# sourceMappingURL=controller.account.js.map