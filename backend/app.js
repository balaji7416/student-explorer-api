import express from "express"
import cors from "cors" // Add this line
const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Enable CORS 

import studentRoutes from "./routes/students.js";

app.use(express.json());  // middle ware for parsing JSON bodies

//for base path of router
app.use("/students", studentRoutes);

//wild card route for 404
app.all("*", (req, res) => {
    res.status(404).send("🚫 Route not found!")
});

app.listen(port, () => {
    console.log(`🎓 Student Explorer API running at http://localhost:${port}`);
});

