import { DataTypes } from "sequelize";
import database from "../config/Database.js";

const Anime = database.define("animes", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement:false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    studio : {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    seasons : {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})

export default Anime;

(() => {
    database.sync();
})();