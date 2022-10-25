import express from "express";

const router = express.Router();

const users = [
    {
        firstName: "John",
        lastName: "Wick",
        city: "New York",
    },
    {
        firstName: "Mayter",
        lastName: "Wick",
        city: "New York",
    },
    {
        firstName: "Mary",
        lastName: "Wick",
        city: "New York",
    },
];

router.get("/", (req, res) => {
    res.send(users);
});

router.post("/", (req, res) => {});

export default router;
