const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/schoole', {
    useNewUrlParser: true, useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB connected!')
}).catch((err) => {
    console.log(err)
});

//view engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.use('/', require('./routes/index'));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`PORT ${PORT} is running...`);
});