import sequelize from "../index.js";
import { DataTypes } from "sequelize";

const Todo = sequelize.define("article", {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastUpdate: {
        type: DataTypes.DATE,
        allowNull: false,
  }, 
},
  {
    timestamps: true,
  });
  
  export default Todo;