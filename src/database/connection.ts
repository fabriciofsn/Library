import { Sequelize } from "sequelize";

const Connection: Sequelize = new Sequelize("library", "postgres", "xtm440", {
  dialect: "postgres",
  host: "localhost",
  port: 5432,
});

(async () => {
  try {
    Connection.sync().then(() => {
      console.log("Connected to the database");
    });
  } catch (error) {
    console.log(`There was an error ${error}`);
  }
})();
export default Connection;
