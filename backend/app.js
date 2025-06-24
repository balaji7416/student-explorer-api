const express = require("express");
const cors = require("cors"); // Add this line
const app = express();

app.use(cors()); // Enable CORS 

const studentRoutes = require("./routes/students");

app.use(express.json());  // middle ware for parsing JSON bodies

//for base path of router
app.use("/students", studentRoutes);

//wild card route for 404
app.all("*", (req, res) => {
    res.status(404).send("🚫 Route not found!")
});

app.listen(3000, () => {
    console.log("🎓 Student Explorer API running at http://localhost:3000");
});

