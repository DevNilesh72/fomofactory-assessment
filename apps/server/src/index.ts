import express from "express";
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

dotenv.config();
const prisma = new PrismaClient()

const app = express()
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000']
}))

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
            result: prices
        });
    } catch (error) {
        res.status(500).json({
            msg: error || "Something went wrong"
        })
    }
})

app.listen(3001, () => {
    console.log("Server started at http://localhost:3001")
})
