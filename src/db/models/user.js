import sequelize from "../index.js";
import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";

const User = sequelize.define(
  "user",
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
  {
    timestamps: false,
  }
);



export default User;