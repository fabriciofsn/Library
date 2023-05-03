const sequelize = require("sequelize");
import Connection from "./connection";

const users = Connection.define("users", {
  nome: {
    type: sequelize.TEXT,
    allowNull: false,
  },
  email: {
    type: sequelize.TEXT,
    allowNull: false,
  },
  senha: {
    type: sequelize.TEXT,
    allowNull: false,
  },
});

export default users;
