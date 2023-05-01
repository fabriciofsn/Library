import { Request, Response, Router } from "express";

const express = require("express");

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("home page");
});

export default router;
