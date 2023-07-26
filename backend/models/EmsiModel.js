import { DataTypes } from "sequelize";
import database from "../config/Database.js";

const Emsies = database.define("emsies", {
    name: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING(30),
        allowNull: true,
        defaultValue: "Secret",
    }
}, {
    timestamps: false,
});



export default Emsies;

(() => {
    database.sync();
})();