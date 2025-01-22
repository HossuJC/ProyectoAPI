import express from "express";
import { signUp } from "../controllers/auth.contoller.js";

const authRouter = express.Router();

authRouter.post('/signUp', (req, res) => {
    signUp(req.body).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        console.error("Error on POST /signUp route:", err);
        res.status(500).json({ message: err });
    });
});

export default authRouter;