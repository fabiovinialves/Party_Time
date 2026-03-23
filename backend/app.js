require("dotenv").config();

const express = require("express");
const cors = require("cors");

const conn = require("./db/conn");      // conecta no Mongo
const router = require("./routes/router"); // junta services + parties

const app = express();

// middlewares
app.use(cors({ origin: "http://localhost:5173" })); // Vite
app.use(express.json());

// rotas: isso cria /api/services e /api/parties
app.use("/api", router);

// conecta no banco e sobe servidor
conn();

app.listen(3000, () => console.log("Servidor Online!"));