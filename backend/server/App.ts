import dotenv from "dotenv";
import express from "express";
import useRouter from "./routes/userRoutes";
import Database from "./database/models/connectionDatabase";
dotenv.config();
const app: any = express();
const databaseConnection = new Database();
const port = process.env.PORT as string;
const urlSystem = process.env.URlSystem;

app.use(express.urlencoded({ extended: true }));
app.use(useRouter);
app.listen(port, () => {
  databaseConnection._connect(process.env.urlConnection);
  console.log(`-----------------------------------------------`);
  console.log(`Servidor iniciado na porta ${port}`);
  console.log(`-----------------------------------------------`);
  console.log(`Acesso em: ${urlSystem}${port}`);
});
