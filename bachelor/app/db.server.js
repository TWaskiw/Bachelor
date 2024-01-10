const { PrismaClient } = require("@prisma/client");

if (!global.prisma) {
  global.prisma = new PrismaClient();
}

global.prisma.$connect();

module.exports = { prisma: global.prisma };
