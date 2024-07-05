"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
// Route Imports
const route_account_js_1 = __importDefault(require("./routes/route.account.js"));
const route_product_js_1 = __importDefault(require("./routes/route.product.js"));
const route_category_js_1 = __importDefault(require("./routes/route.category.js"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
dotenv_1.default.config();
// Base Middlewares
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use('/images', express_1.default.static('images'));
// Routes
app.use('/api', route_account_js_1.default);
app.use('/api', route_product_js_1.default);
app.use('/api', route_category_js_1.default);
// App Port Listener
app.listen(port, () => {
    console.log('Server Activated');
    console.log(`http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map