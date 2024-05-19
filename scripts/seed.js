const { db } = require('@vercel/postgres');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS customer_contacts (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name TEXT,
        email TEXT,
        phone TEXT,
        comments TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `;

    console.log(`Created "customer_contacts" table`);

    return {
      createTable,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});