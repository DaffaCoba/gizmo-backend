"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class AccountModel {
    async getAll() {
        const account = await prisma.accounts.findMany();
        return account;
    }
    async getById(accountId) {
        const account = await prisma.accounts.findUnique({
            where: {
                id: parseInt(accountId)
            }
        });
        return account;
    }
    async getByUsername(data) {
        const account = await prisma.accounts.findUnique({
            where: {
                username: data.username.toLowerCase()
            }
        });
        return account;
    }
    async create(data) {
        const hashedPassword = await bcryptjs_1.default.hash(data.password, 10);
        const account = await prisma.accounts.create({
            data: { username: data.username.toLowerCase(), password: hashedPassword }
        });
        return account;
    }
    async update(accountId, data) {
        const account = await prisma.accounts.update({
            where: {
                id: parseInt(accountId)
            },
            data: data
        });
        return account;
    }
    async delete(accountId) {
        const account = await prisma.accounts.delete({
            where: {
                id: parseInt(accountId)
            }
        });
        return account;
    }
}
exports.default = AccountModel;
//# sourceMappingURL=model.account.js.map