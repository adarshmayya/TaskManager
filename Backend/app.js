var express = require('express');
var app = express();
const cors = require('cors');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const taskroute = require('./api/routes/taskroute');

//port
const PORT = process.env.PORT || 3000;


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors())

//error message
app.use((req,res,next) =>{
    const error = new Error('Not found');
    error.status=404;
    next(error);
});

app.use((error,req,res,next) =>{
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    });
})


app.use('/tasks',taskroute);

app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT ${PORT}`);
  });