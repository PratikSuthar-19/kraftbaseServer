import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();



const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // important for Neon/Supabase
      rejectUnauthorized: false, // allow self-signed certs
    },
  },
});

export default sequelize;

// // ✅ Sequelize connection to PostgreSQL
// const sequelize = new Sequelize(
//   process.env.DB_NAME,     // database
//   process.env.DB_USER,     // username
//   process.env.DB_PASSWORD, // password
//   {
//     host: process.env.DB_HOST,
//     dialect: "postgres",   // ✅ PostgreSQL
//     logging: false,        // disable SQL logs in console
//   }
// );

// // ✅ Test connection
// try {
//   await sequelize.authenticate();
//   console.log("✅ PostgreSQL connected successfully!");
// } catch (error) {
//   console.error("❌ Unable to connect to PostgreSQL:", error.message);
// }

// export default sequelize;
