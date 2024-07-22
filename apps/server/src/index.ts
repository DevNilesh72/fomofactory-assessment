import express from "express";
import dotenv from 'dotenv';
dotenv.config();

const app = express()
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "hello world"
    });
})

app.listen(3001, () => {
    console.log("Server started")
})

async function fetchData() {
    const data = await fetch(process.env.API_URL + "?ids=bitcoin&vs_currencies=usd").then(res=> res.json())
    // {"tether":{"usd":0.999824}}
}