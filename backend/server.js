import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js"
import imageRoutes from "./routes/image.routes.js";

const app = express();

app.use(express.json());

connectDB();

app.use("/api/images", imageRoutes);

app.get("/", (req, res) => {
    res.send("Server is On");
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is started and running on port ${PORT}`);
})