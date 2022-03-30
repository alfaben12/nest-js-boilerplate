"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new client_1.PrismaClient();
async function main() {
    await prisma.user.create({
        data: {
            name: "Thariq Alfa",
            password: bcrypt.hashSync("12345678", 8),
            email: "thariq@company.com",
            createdAt: new Date(),
            updatedAt: null,
        },
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map