import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Task = sequelize.define("Task", {
  date: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: () => {
      const d = new Date();
      return d.toLocaleDateString("en-US", { day: "numeric", month: "short" }); // e.g., "3 Jan"
    },
  },
  time: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: () => {
      const d = new Date();
      return d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }); // e.g., "4:35 PM"
    },
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("Critical", "Medium", "High"),
    allowNull: false,
  },
  tag: {
    type: DataTypes.ENUM("Hypejab", "Getastra"),
    allowNull: false,
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  StatusType: {
    type: DataTypes.ENUM("Draft", "Unsolved", "Under Review", "Solved"),
    allowNull: false,
  },
});

export default Task;
