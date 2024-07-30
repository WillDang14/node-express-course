//////////////////////////////////////////////////////////
const express = require("express");
const app = express();

const tasks = require("./routes/tasks");

// Connect to DB
const connectDB = require("./db/connect");

// Call env file
require("dotenv").config();

// module not-found
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//////////////////////////////////////////////////////////
// Setup for static file ==>> HTML
app.use(express.static("./public"));

//////////////////////////////////////////////////////////
// middleware
// Declare this to read req.body
app.use(express.json());

//////////////////////////////////////////////////////////
app.use("/api/v1/tasks", tasks);

//////////////////////////////////////////////////////////
app.use(notFound);

app.use(errorHandlerMiddleware);
//////////////////////////////////////////////////////////
// const port = 3000;
const port = process.env.PORT || 3000;

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
