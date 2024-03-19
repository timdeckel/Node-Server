import express from "express";
import catRouter from "./routes/catRouter.js";
import rockRouter from "./routes/rockRouter.js";
import birdRouter from "./routes/birdRouter.js";
import dogRouter from "./routes/dogRouter.js";
import chalk from "chalk";
import {homeData} from "./data/home-data.js";

const app = express();
const port = process.env.PORT || 4000;
const fs = import('fs'); // filesystem thingy for later

app.use(express.static('public'));
app.set('view engine', "ejs");

app.get('/', (req, res) => {
    res.render("pages/home", {
        pageTitle: homeData.pageTitle,
        mainHeader: homeData.mainHeader,
        textContent: homeData.textContent
    })
})

app.use('/rocks', rockRouter);
app.use('/birds', birdRouter);
app.use('/cats', catRouter);
app.use('/dogs', dogRouter)


app.listen(port, () => {
    console.log(chalk.blue(`Server is running at port: ${port}`));
});

