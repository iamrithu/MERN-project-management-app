const mongoose = require('mongoose');


const connectDB = async () => {
    await mongoose.set("strictQuery", false);
    const con = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb Connected :${con.connection.host}`.red.underline.bold);
}
module.exports = connectDB;