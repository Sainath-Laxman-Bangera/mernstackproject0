import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routers/product.route.js";
import path from "path";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4500;

const __dirname = path.resolve();

app.use(express.json()); //middlware that helps get data in json

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server running in port : ${PORT}`);
  connectDB();
});

//SQFiK4ix3wLU5UpY
