import express from "express";
import { 
    createEmsi, 
    getDatas, 
    getEmsiById, 
    updateEmsi,
    getWaifus, 
    addWaifu,
    deleteWaifu, 
    getAnimes,
} from "../controllers/Controllers.js";

const router = express.Router();

router.get("/datas", getDatas);
router.get("/datas/:id", getEmsiById);
router.post("/datas", createEmsi);
router.patch("/datas/:id", updateEmsi);

router.get("/waifus", getWaifus);
router.post("/waifus", addWaifu);
router.delete("/waifus/:id", deleteWaifu);

router.get("/animes", getAnimes);

export default router;