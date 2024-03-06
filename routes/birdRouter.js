import express from "express";
import {birdData} from "../data/bird-data.js";
const birdRouter = express.Router();

birdRouter.get('/', (req, res) => {
    res.render("pages/birds", {
            pageTitle: birdData.pageTitle,
            mainHeader: birdData.mainHeader,
            textContent: birdData.textContent,
        })
})

export default birdRouter;