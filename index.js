import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import sequelize from "./config/db.js";



dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes); 


(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to PostgreSQL");

    // sync models here
    await sequelize.sync({ alter: true }); 
    console.log(" Database synced");

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("Unable to connect:", err);
  }
})();



// sequelize.sync().then(() => {
//   app.listen(PORT, () =>
//     console.log(` Server running on http://localhost:${PORT}`)
//   );
// });


