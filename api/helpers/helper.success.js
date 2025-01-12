"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SuccessHelper {
    static OK = (req, res, message) => {
        return res.status(200).json({
            code: 200,
            status: 'success',
            message: message
        });
    };
    static DataFound = (req, res, message, data) => {
        return res.status(200).json({
            code: 200,
            status: 'success',
            message: message,
            data: data
        });
    };
    static Created = (req, res, message, data) => {
        return res.status(201).json({
            code: 201,
            status: 'success',
            message: message,
            data: data
        });
    };
}
exports.default = SuccessHelper;
//# sourceMappingURL=helper.success.js.map