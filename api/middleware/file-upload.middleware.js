"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadCheck = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path_1.default.extname(file.originalname));
    }
});
const upload = (0, multer_1.default)({ storage: storage });
const uploadCheck = (req, res, next) => {
    if (!req.file && !req.files) {
        return next(); // No file to upload, skip to the next middleware
    }
    upload.single('file')(req, res, next); // 'file' should match the name attribute in your form
};
exports.uploadCheck = uploadCheck;
exports.default = upload;
//# sourceMappingURL=file-upload.middleware.js.map