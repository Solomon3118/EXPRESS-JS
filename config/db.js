//db.js

const mongoose = require('mongoose')

const url = `mongodb+srv://Solomon-user_11:dracarys66@cluster0.fxfwgkc.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect('mongodb+srv://Solomon-user_11:dracarys66@cluster0.fxfwgkc.mongodb.net/?retryWrites=true&w=majority',connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })