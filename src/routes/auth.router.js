import express from "express";
import { signUp, logIn } from "../controllers/auth.contoller.js";

const authRouter = express.Router();

authRouter.post('/signUp', (req, res) => {
    signUp(req.body).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        console.error("Error on POST /signUp route:", err);
        res.status(500).json({ message: err });
    });
});

authRouter.post('/logIn', (req, res) => {
    logIn(req.body).then((data) => {
        res.status(200).json(data);
    }).catch((err) => {
        console.error("Error on POST /logIn route:", err);
        res.status(500).json({ message: err.message });
    });
});

export default authRouter;