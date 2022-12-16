import express from "express";
const app = express();

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const router = express.Router();

app.use(express.static(path.join(__dirname,"public")));
app.use(express.static("public"));

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});