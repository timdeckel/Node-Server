import express from "express";
import { catData } from "../data/cat-data.js";
import { catList} from "../data/cat-data.js";
const catRouter = express.Router();

catRouter.get('/', (req, res) => {
    res.render("pages/cats", {
        pageTitle: catData.pageTitle,
        mainHeader: catData.mainHeader,
        textContent: catData.textContent,
        catList: catList
    });
});

catList.forEach( cat => {
    catRouter.get(`/${cat.name}`, (req, res) => {
        res.render("pages/catProfile", {
            pageTitle: catData.pageTitle,
            mainHeader: cat.name,
            catList: catList,
            currentCat: cat
        });
    })
});

export default catRouter;