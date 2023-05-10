import mysql from "mysql";

//Pega os dados da tabela 
export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "senha123",
  database: "crud",
});
