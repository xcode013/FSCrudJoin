import { Sequelize } from "sequelize";

const database = new Sequelize('join_learndb', 'root', '', {
    host: "localhost",
    dialect: "mysql",
    port: 3308,
});

export default database;