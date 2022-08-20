// ThirdParty Module
const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send("Hi Friends");
});

// LocalHost
app.listen(2000,() => {
    console.log('Server Started On 2000');
});