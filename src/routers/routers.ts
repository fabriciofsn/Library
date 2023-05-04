import { Request, Response, Router } from "express";

const users = require("../database/user");
const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

router.get("/cadastrar", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

router.get("/login", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

router.post("/cadastrar/usuario", async (req: Request, res: Response) => {
  let { nome, email, senha } = req.body;
  // const hash = await bcrypt.hash(senha, 10);

  try {
    users.create({
      nome,
      email,
      senha,
    });
  } catch (error) {
    res.send(`There was an error -> ${error}`);
  } finally {
    res.redirect("/login");
  }
});

export default router;
