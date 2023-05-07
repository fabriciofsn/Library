const sequelize = require("sequelize");
import Connection from "./connection";

const Users = Connection.define("users", {
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

export default Users;
