const sequelize = require("sequelize");
import connection from "./connection";

const users = connection.define("users", {
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
