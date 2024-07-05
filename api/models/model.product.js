"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class ProductModel {
    async getAll() {
        const products = await prisma.products.findMany({
            include: {
                Categories: true
            }
        });
        return products;
    }
    async getById(slug) {
        const product = await prisma.products.findUnique({
            where: {
                slug: slug
            },
            include: {
                Categories: true
            }
        });
        return product;
    }
    async create(data) {
        const product = await prisma.products.create({
            data: data
        });
        return product;
    }
    async update(slug, data) {
        const product = await prisma.products.update({
            where: {
                slug: slug
            },
            data: data
        });
        return product;
    }
    async delete(slug) {
        const product = await prisma.products.delete({
            where: {
                slug: slug
            }
        });
        return product;
    }
}
exports.default = ProductModel;
//# sourceMappingURL=model.product.js.map