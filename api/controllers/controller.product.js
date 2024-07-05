"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_product_js_1 = __importDefault(require("../models/model.product.js"));
const helper_error_js_1 = __importDefault(require("../helpers/helper.error.js"));
const helper_success_js_1 = __importDefault(require("../helpers/helper.success.js"));
const helper_validation_js_1 = __importDefault(require("../helpers/helper.validation.js"));
const product = new model_product_js_1.default();
class ProductController {
    static async getAllProducts(req, res) {
        try {
            const result = await product.getAll();
            return helper_success_js_1.default.DataFound(req, res, 'Products found', result);
        }
        catch (error) {
            return helper_error_js_1.default.InternalServer(req, res, error.message);
        }
    }
    static async getProductBySlug(req, res) {
        try {
            const productSlug = req.params.productSlug;
            const result = await product.getById(productSlug);
            return helper_success_js_1.default.DataFound(req, res, 'A Product found', result);
        }
        catch (error) {
            return helper_error_js_1.default.InternalServer(req, res, error.message);
        }
    }
    static async createProduct(req, res) {
        try {
            const imageFile = req.file.filename;
            const data = { ...req.body, image: imageFile };
            const { error } = await helper_validation_js_1.default.createProduct(data);
            if (error) {
                return helper_error_js_1.default.BadRequest(req, res, error.details[0].message);
            }
            const result = await product.create(data);
            return helper_success_js_1.default.DataFound(req, res, 'New Product Created', result);
        }
        catch (error) {
            return helper_error_js_1.default.InternalServer(req, res, error.message);
        }
    }
    static async updateProduct(req, res) {
        try {
            const productSlug = req.params.productSlug;
            const imageFile = req.file?.filename;
            const data = req.body;
            if (imageFile) {
                data.image = imageFile;
            }
            const { error } = await helper_validation_js_1.default.createProduct(data);
            if (error) {
                return helper_error_js_1.default.BadRequest(req, res, error.details[0].message);
            }
            const result = await product.update(productSlug, data);
            return helper_success_js_1.default.DataFound(req, res, 'Existing Product Updated', result);
        }
        catch (error) {
            return helper_error_js_1.default.InternalServer(req, res, error.message);
        }
    }
    static async deleteProduct(req, res) {
        try {
            const productSlug = req.params.productSlug;
            const result = await product.delete(productSlug);
            return helper_success_js_1.default.DataFound(req, res, 'Product Deleted', result);
        }
        catch (error) {
            return helper_error_js_1.default.InternalServer(req, res, error.message);
        }
    }
}
exports.default = ProductController;
//# sourceMappingURL=controller.product.js.map