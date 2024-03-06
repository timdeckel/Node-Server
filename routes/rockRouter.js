import express from "express";
import {rockData} from "../data/rock-data.js";
const rockRouter = express.Router();

rockRouter.get('/', (req, res) => {
    res.render("pages/rocks", {
        pageTitle: rockData.pageTitle,
        mainHeader: rockData.mainHeader,
        textContent: rockData.textContent,
    })
})

export default rockRouter;