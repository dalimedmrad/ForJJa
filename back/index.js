console.clear()
require('dotenv').config();
const express = require('express')
const app = express();
const connectDB = require('./config/dbConnect');
const cors = require("cors");

app.use("/uploads", express.static("uploads"));


app.use(cors());
connectDB();
app.use(express.json());
app.use("/api/user",require('./routes/user'));
app.use("/api/category",require('./routes/category'));
app.use("/api/film",require('./routes/film'));
app.use("/api/film/upload",require("./routes/upload"));





const PORT = process.env.PORT
app.listen(PORT,(err) => err ? console.log(err): console.log(`server is runnig ${PORT}`));