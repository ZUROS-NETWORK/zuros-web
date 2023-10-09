import dotenv from 'dotenv';
import express from "express";
import cors from "cors";
import { router } from "./api";
dotenv.config();

const PORT = process.env.PORT || 3000;
const ORIGINS = process.env.ORIGINS || 'http://localhost:3000';

const app = express();

app.use(cors({
    origin: ORIGINS,
    methods: 'GET,PUT,POST,DELETE',
    credentials: true,
}));

app.use("/api", router);


app.use((req, res) => {
    res.status(404).send('<img src="https://cataas.com/cat/says/No se que buscas pero toma un gatico">');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

