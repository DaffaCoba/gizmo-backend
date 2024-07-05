"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
class Validation {
    static async createAccount(data) {
        const schema = joi_1.default.object({
            username: joi_1.default.string().required(),
            password: joi_1.default.string().required()
        });
        return schema.validate(data);
    }
    static async createCategory(data) {
        const schema = joi_1.default.object({
            name: joi_1.default.string().required(),
            slug: joi_1.default.string().required(),
            image: joi_1.default.string().required()
        });
        return schema.validate(data);
    }
    static async createProduct(data) {
        const schema = joi_1.default.object({
            name: joi_1.default.string().required(),
            slug: joi_1.default.string().required(),
            type: joi_1.default.string().required(),
            description: joi_1.default.string().required(),
            image: joi_1.default.string().required(),
            categorySlug: joi_1.default.string().required(),
            isFeatured: joi_1.default.boolean().optional()
        });
        return schema.validate(data);
    }
}
exports.default = Validation;
//# sourceMappingURL=helper.validation.js.map