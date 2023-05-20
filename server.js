const db = require('./models/db');
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
var cors = require('cors');

const userRouter = require("./routes/user");
const movieRouter = require("./routes/movie");

const corsOptions ={
   origin:'*',
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.use('/user', userRouter);
app.use('/movie', movieRouter)


app.listen(process.env.PORT || 3002);
