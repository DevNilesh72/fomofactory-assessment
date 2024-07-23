import express from "express";
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();
const prisma = new PrismaClient()

const app = express()
app.use(express.json());

app.get("/stocks/list/:coin", async (req, res) => {
    try {
        const prices = await prisma.stockPrice.findMany({
            take: 20,
            where: {
                name: req.params.coin,
            },
            orderBy: {
                created_at: 'desc',
            },
        })
        res.json({
            res: prices
        });
    } catch (error) {
        res.status(500).json({
            msg: error || "Something went wrong"
        })
    }
})

app.listen(3001, () => {
    console.log("Server started at https://localhost:3001")
})
