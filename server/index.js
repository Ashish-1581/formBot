const express = require("express");

const env = require("dotenv");
const mongoose = require("mongoose");
const cors= require("cors");
const formRoute = require("./routes/formRoute");
const analyticsRoute = require("./routes/analyticsRoute");
const folderRoute = require("./routes/folderRoute");
const authRoute = require("./routes/authRoute");
const viewsRoute = require("./routes/viewsRoute");
const themeRoute=require("./routes/themeRoute");

const app = express();
app.use(cors(
    {
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        allowedHeaders: "Content",

        
    }


));
env.config(); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT ;
const MONGO_URL = process.env.MONGO_URL;

app.get("/", (req, res) => {
    res.send("Welcome to formbot-backend");
}   
);

app.use("/form", formRoute);
app.use("/analytics", analyticsRoute);
app.use("/folder", folderRoute);
app.use("/auth", authRoute);
app.use("/views", viewsRoute);
app.use("/theme",themeRoute);

app.get("*", (req, res) => {
    res.status(404).send("404, Page not found");
});



app.listen(PORT||4000, () => {
    console.log(`Server is running on port ${PORT}`);
});
mongoose.connect(MONGO_URL).then(() => {
    console.log("Database connected");
}
).catch((err) => {  
    console.log(err);
});