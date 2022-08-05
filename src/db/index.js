import { Sequelize } from "sequelize";

const { HOST, USER, PORT, PASSWORD, DATABASE } = process.env;

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
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