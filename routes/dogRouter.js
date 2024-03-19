import express from "express";
const dogRouter = express.Router();

dogRouter.get('/', (req, res) => {
    if (req.query.breed === "Labrador") {
        res.render("pages/dogs", {
            pageTitle: "labradors are big fluffy dogs!",
            mainHeader: "Who let them out?",
            textContent: "Du Duu Du Du Duu"
        })
    }else {
        res.render("pages/dogs", {
        pageTitle: "Dogs!",
        mainHeader: "Who let them out?",
        textContent: "Du Duu Du Du Duu"
    })
    }
})

dogRouter.get('/puppies', (req, res) => {
    res.render("pages/dogs", {
        pageTitle: "puppy!",
        mainHeader: "soo cute",
        textContent: "Du Duu Du Du Duu",
        isPuppy: true
    })
})

dogRouter.get('/wolf', (req, res) => {
    res.render("pages/dogs", {
        pageTitle: "wolf!",
        mainHeader: "soo scary!",
        textContent: "Du Duu Du Du Duu"
    })
})



export default dogRouter;