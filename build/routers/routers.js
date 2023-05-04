"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const users = require("../database/user");
const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const router = express.Router();
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});
router.get("/cadastrar", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});
router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});
router.post("/cadastrar/usuario", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { nome, email, senha } = req.body;
    // const hash = await bcrypt.hash(senha, 10);
    try {
        users.create({
            nome,
            email,
            senha,
        });
    }
    catch (error) {
        res.send(`There was an error -> ${error}`);
    }
    finally {
        res.redirect("/login");
    }
}));
exports.default = router;
