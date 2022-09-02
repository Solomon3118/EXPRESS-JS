const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
const sayHi = (req, res) => {
    res.send("Hi!");
};

app.get("/", function(req,res){
    res.send('<html><body><h1>Hi</h1></body></html>');
});
app.post('/submit-data', function (req, res){
    res.send('POST Request');
});
app.put('/update-data' , function(req, res){
    res.send('PUT Request');
});
app.delete('/delete-data', function(req,res){
    res.send('DELETE Request');
});
app.listen(5000, () => {
    console.log('Server is runnig on port 5000.');
});
