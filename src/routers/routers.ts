import { Request, Response, Router } from "express";

const express = require("express");
const path = require("path");

const router: Router = express.Router();

router.get("/", (req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

router.get("/cadastrar", (req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

router.get("/login", (req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

router.post("/cadastrar/usuario", async (req: Request, res: Response) => {
  const { nome, email, senha } = req.body;

  try {
    console.log(nome);
    console.log(email);
    console.log(senha);
  } catch (error) {
    console.log(`There was an error ${error}`);
  } finally {
    res.redirect("/");
  }
});

export default router;
