const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

const cors = require("cors");
const corsOptions = {
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/forms", require("./routes/formRoutes"));
app.use("/api/submission", require("./routes/submissionRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));

//console.log("Hello From Server");
