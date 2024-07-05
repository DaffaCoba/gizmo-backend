"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_category_js_1 = __importDefault(require("../models/model.category.js"));
const helper_error_js_1 = __importDefault(require("../helpers/helper.error.js"));
const helper_success_js_1 = __importDefault(require("../helpers/helper.success.js"));
const helper_validation_js_1 = __importDefault(require("../helpers/helper.validation.js"));
const category = new model_category_js_1.default();
class CategoryController {
    static async getAllCategories(req, res) {
        try {
            const result = await category.getAll();
            return helper_success_js_1.default.DataFound(req, res, 'Categories found', result);
        }
        catch (error) {
            return helper_error_js_1.default.InternalServer(req, res, error.message);
        }
    }
    static async getCategoryBySlug(req, res) {
        try {
            const categorySlug = req.params.categorySlug;
            const result = await category.getBySlug(categorySlug);
            return helper_success_js_1.default.DataFound(req, res, 'A Category found', result);
        }
        catch (error) {
            return helper_error_js_1.default.InternalServer(req, res, error.message);
        }
    }
    static async createCategory(req, res) {
        try {
            const imageFile = req.file.filename;
            const data = { ...req.body, image: imageFile };
            const { error } = await helper_validation_js_1.default.createCategory(data);
            if (error) {
                return helper_error_js_1.default.BadRequest(req, res, error.details[0].message);
            }
            const result = await category.create(data);
            return helper_success_js_1.default.DataFound(req, res, 'New Category Created', result);
        }
        catch (error) {
            return helper_error_js_1.default.InternalServer(req, res, error.message);
        }
    }
    static async updateCategory(req, res) {
        try {
            const categorySlug = req.params.categorySlug;
            const imageFile = req.file?.filename;
            const data = req.body;
            if (imageFile) {
                data.image = imageFile;
            }
            const { error } = await helper_validation_js_1.default.createCategory(data);
            if (error) {
                return helper_error_js_1.default.BadRequest(req, res, error.details[0].message);
            }
            const result = await category.update(categorySlug, data);
            return helper_success_js_1.default.DataFound(req, res, 'Existing Category Updated', result);
        }
        catch (error) {
            return helper_error_js_1.default.InternalServer(req, res, error.message);
        }
    }
    static async deleteCategory(req, res) {
        try {
            const categorySlug = req.params.categorySlug;
            const result = await category.delete(categorySlug);
            return helper_success_js_1.default.DataFound(req, res, 'Category Deleted', result);
        }
        catch (error) {
            return helper_error_js_1.default.InternalServer(req, res, error.message);
        }
    }
}
exports.default = CategoryController;
//# sourceMappingURL=controller.category.js.map