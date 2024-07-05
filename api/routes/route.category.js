"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_category_js_1 = __importDefault(require("../controllers/controller.category.js"));
const file_upload_middleware_js_1 = __importDefault(require("../middleware/file-upload.middleware.js"));
const helper_authorization_js_1 = require("../helpers/helper.authorization.js");
const CategoryRouter = (0, express_1.Router)();
CategoryRouter.get('/categories', controller_category_js_1.default.getAllCategories);
CategoryRouter.get('/categories/:categorySlug', controller_category_js_1.default.getCategoryBySlug);
CategoryRouter.post('/categories/create', helper_authorization_js_1.authCheck, file_upload_middleware_js_1.default.single('image'), controller_category_js_1.default.createCategory);
CategoryRouter.put('/categories/:categorySlug', helper_authorization_js_1.authCheck, file_upload_middleware_js_1.default.single('image'), controller_category_js_1.default.updateCategory);
CategoryRouter.delete('/categories/:categorySlug', helper_authorization_js_1.authCheck, controller_category_js_1.default.deleteCategory);
exports.default = CategoryRouter;
//# sourceMappingURL=route.category.js.map