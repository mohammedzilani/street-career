// import * as express from 'express';
import express, { Router } from 'express';
const app = express();
app.use(express.static('../public'))
app.get("/", (req, res) => {
    res.sendfile("index.html");
})
const port = 3030;


app.listen(port, (res, err) => {
    if (err) {
        console.log(err.message);
        process.exit(1);
    }
    console.log("server listening on port " + port);
})