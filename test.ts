import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });
  
  async function testConnection() {
    try {
      await prisma.$connect();
      console.log('Successfully connected to the database.');
  
      // Test a simple query
      const users = await prisma.user.findMany();
      console.log('Users:', users);
  
    } catch (error) {
      console.error('Error connecting to the database:', error);
    } finally {
      await prisma.$disconnect();
    }
  }
  
  testConnection();
  