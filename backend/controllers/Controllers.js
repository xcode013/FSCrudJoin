import Emsies from "../models/EmsiModel.js";
import Anime from "../models/AnimeModel.js";
import Waifus from "../models/WaifuModel.js";

export const getDatas = async (req, res) => {
    try {
        const response = await Emsies.findAll({
            include: [{
                model: Waifus,
                include: [{
                    model: Anime,
                    required: true,
                }]
            }]
        })
        return res.status(200).json(response);
    } catch (error) {
        console.log(error.massage);
    }
}



export const getEmsiById = async (req, res) => {
    try {
        const response = await Emsies.findOne({
            where: {
                id: req.params.id
            }
        });
        return res.status(200).json(response);
    } catch (error) {
        console.log(error.massage);
    }
}


export const createEmsi = async (req, res) => {
    try {
        await Emsies.create(req.body);
        return res.status(201).json({msg: "Data Berhasil Ditambahkan"});
    } catch (error) {
        console.log(error.massage);
    }
}



export const updateEmsi = async (req, res) => {
    try {
        await Emsies.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).json({msg: "Data berhasil di perbarui"});
    } catch (error) {
        console.log(error.massage);
    }
}



export const getWaifus = async (req, res) => {
    try {
        const response = await Waifus.findAll();
        return res.status(200).json(response);
    } catch (error) {
        console.log(error.massage);
    }
}

export const addWaifu = async (req, res) => {
    try {
        await Waifus.create(req.body);
        return res.status(201).json(response);
    } catch (error) {
        console.log(error.massage);
    }
}

export const deleteWaifu = async (req, res) => {
    try {
        await Waifus.destroy({
            where: {
                id: req.params.id
            }
        })
        return res.status(200).json({msg: "Waifu telah dihapus"});
    } catch (error) {
        console.log(error.massage);
    }
}



export const getAnimes = async (req, res) => {
    try {
        const response = await Anime.findAll();
        return res.status(200).json(response);
    } catch (error) {
        console.log(error.massage);
    }
}