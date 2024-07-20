import { commonValue } from "@repo/common/config";
import express from "express";

const app = express()

console.log(commonValue)

app.get("/", (req, res) => {
    res.json({
        message: "hello world"
    });
})

app.listen(3001, () => {
    console.log("Server started")
})