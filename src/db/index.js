import { Sequelize } from "sequelize";

const { HOST, PORT, PASSWORD } = process.env;

const sequelize = new Sequelize("todolist_challenge_silvio", "challenge_root", PASSWORD, {
    host: HOST,
    port: PORT,
    dialect: "mysql",
});

export const testDB = async () => {
    try {
      await sequelize.authenticate();
    } catch (error) {
      console.log(error);
    }
  };

export const syncDB = async () => {
    try {
        await sequelize.sync({ logging: false });
    } catch (error) {
        console.log(error);
    }
};

export default sequelize;