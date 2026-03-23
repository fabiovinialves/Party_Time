const mongoose = require("mongoose");

const conn = async () => {
  try {
    const dbConn = await mongoose.connect(process.env.MONGO_URI);

    console.log("Conectado ao MongoDB!");
    return dbConn;
  } catch (error) {
    console.error("Erro ao conectar no MongoDB:", error);
    process.exit(1);
  }
};

module.exports = conn;