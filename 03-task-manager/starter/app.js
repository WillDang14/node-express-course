const express = require("express");
const app = express();

const tasks = require("./routes/tasks");

// Connect to DB
const connectDB = require("./db/connect");

// Call env file
require("dotenv").config();

//////////////////////////////////////////////////////////
//middleware
// Declare this to read req.body
app.use(express.json());

//////////////////////////////////////////////////////////
// routes
app.get("/hello", (req, res) => {
    res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

//////////////////////////////////////////////////////////
const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);

        app.listen(
            port,
            console.log(`Server is listening on port ${port} ...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();
