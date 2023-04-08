const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(
            `MongoDB connected: ${conn.connection.host}`.cyan.underline
        );
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
};

module.exports = connectDB;