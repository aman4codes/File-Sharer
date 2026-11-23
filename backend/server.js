import express from "express";
import dotenv from "dotenv";
import multer from "multer";
import connectDB from "./src/db.js"

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

const upload = multer({
    dest: "uploads/"
});

app.post("/upload", upload.single("image"), (req, res) => {

    console.log(req.file);

    res.json({
        messgae: "File uploaded succesfully",
        file: req.file
    })
});

app.get("/", (req, res) => {
    res.send("Server is On");
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is started and running on port ${PORT}`);
})