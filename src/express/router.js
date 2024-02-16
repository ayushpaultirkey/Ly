import express, { request } from "express";

const router = express.Router();

router.use("/api/", (request, response) => {

    response.send("Hello");

});

export default router;