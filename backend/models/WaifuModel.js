import { DataTypes } from "sequelize";
import database from "../config/Database.js";

import Anime from "./AnimeModel.js";
import Emsies from "./EmsiModel.js";

const Waifus = database.define("waifus", {
    name: {
        type: DataTypes.STRING(30),
        allowNull: false,
    }, 
    gender: {
        type: DataTypes.STRING(10),
        allowNull: false,
    }, 
    emsiId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    animeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

Emsies.hasMany(Waifus, { foreignKey: "emsiId"});
Waifus.belongsTo(Emsies, {foreignKey: "id"});
Anime.hasOne(Waifus, { foreignKey: "id"});
Waifus.belongsTo(Anime, {foreignKey: "animeId"});

export default Waifus;

(() => {
    database.sync();
})();