const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const taskRoute = require("./routes/task");
const userRoute = require("./routes/user");

mongoose.connect("mongodb+srv://adarshmayya:devashyamayya3@cluster0-1jzgi.mongodb.net/test?retryWrites=true&w=majority")
        .then(() => {
            console.log("successfully connected to the MongoDB Atlas!");
        })
        .catch((error) => {
            console.log("Unable to connect to the MongoDB Atlas!");
            console.error(error);
        });
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);

const app = express();

//for jwt
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use("/api/task", taskRoute);
app.use("/api/user", userRoute);



module.exports = app;