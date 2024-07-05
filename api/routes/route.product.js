"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_product_js_1 = __importDefault(require("../controllers/controller.product.js"));
const file_upload_middleware_js_1 = __importDefault(require("../middleware/file-upload.middleware.js"));
const helper_authorization_js_1 = require("../helpers/helper.authorization.js");
const ProductRouter = (0, express_1.Router)();
ProductRouter.get('/products', controller_product_js_1.default.getAllProducts);
ProductRouter.get('/products/:productSlug', controller_product_js_1.default.getProductBySlug);
ProductRouter.post('/products/create', helper_authorization_js_1.authCheck, file_upload_middleware_js_1.default.single('image'), controller_product_js_1.default.createProduct);
ProductRouter.put('/products/:productSlug', helper_authorization_js_1.authCheck, file_upload_middleware_js_1.default.single('image'), controller_product_js_1.default.updateProduct);
ProductRouter.delete('/products/:productSlug', helper_authorization_js_1.authCheck, controller_product_js_1.default.deleteProduct);
exports.default = ProductRouter;
//# sourceMappingURL=route.product.js.map