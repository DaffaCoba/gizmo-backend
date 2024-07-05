"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class CategoryModel {
    async getAll() {
        const categories = await prisma.categories.findMany({
            include: {
                Products: true
            }
        });
        return categories;
    }
    async getBySlug(slug) {
        const category = await prisma.categories.findUnique({
            where: {
                slug: slug
            },
            include: {
                Products: true
            }
        });
        return category;
    }
    async create(data) {
        const category = await prisma.categories.create({
            data: data
        });
        return category;
    }
    async update(slug, data) {
        const category = await prisma.categories.update({
            where: {
                slug: slug
            },
            data: data
        });
        return category;
    }
    async delete(slug) {
        const category = await prisma.categories.delete({
            where: {
                slug: slug
            }
        });
        return category;
    }
}
exports.default = CategoryModel;
//# sourceMappingURL=model.category.js.map