import express from "express";
const dogRouter = express.Router();

dogRouter.get('/', (req, res) => {
    res.render("pages/dogs", {
        pageTitle: "Dogs!",
        mainHeader: "Who let them out?",
        textContent: "Du Duu Du Du Duu"
    })
})

export default dogRouter;