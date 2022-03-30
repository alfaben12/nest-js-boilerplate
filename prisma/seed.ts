import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

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
