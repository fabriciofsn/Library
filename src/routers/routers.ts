import { Request, Response, Router } from "express";

import Users from "../database/user";
const express = require("express");
const path = require("path");
import { hash } from "bcrypt";

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
  const hashPassword = await hash(senha, 8);

  const verificaEmail = await Users.findOne({ where: { email } });

  if (!verificaEmail) {
    try {
      await Users.create({
        nome,
        email,
        senha: hashPassword,
      });
    } catch (error) {
      res.json(`There was an error -> ${error}`);
    } finally {
      res.redirect("/login");
    }
  } else {
    res.json("Email já cadastrado");
  }
});

export default router;
