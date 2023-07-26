import express from "express";
import cors from "cors";
import HeroRoutes from "./routes/HeroRoutes.js"

const app = express();

app.use(cors());
app.use(express.json());
app.use(HeroRoutes);

app.listen(5000, () => console.log("Server Up and Running...."));