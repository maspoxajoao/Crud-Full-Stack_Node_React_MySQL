import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";

const app = express();


// conversão para json
app.use(express.json());

// usa o cors para evitar conflitos
app.use(cors());

//chamada de rota
app.use("/", userRoutes);

// chamada para porta
app.listen(8800);
