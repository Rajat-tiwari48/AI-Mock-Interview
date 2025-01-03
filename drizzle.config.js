/** @type { import("drizzle-kit").Config } */
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' }); // Load environment variables from .env file

const DB_PATH = process.env.NEXT_PUBLIC_DRIZZLE_DB_URL;

export default {
  schema: "./utils/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url: DB_PATH || "postgresql://neondb_owner:O5BPikRnEj2d@ep-dawn-credit-a5nsbasg.us-east-2.aws.neon.tech/Mock%20Interview%20AI?sslmode=require",
  },
};
