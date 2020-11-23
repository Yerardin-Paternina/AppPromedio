const express = require('express');
const app = express();
const port = 8080;


app.get('/', (req, res) => { res.sendFile(__dirname + '/index.html'); });

app.listen(port, () => {
    console.log(`Corriendo app: Promedio
     En la dirección: http://localhost:${port}`);
})
process.env.RUNKIT_ENDPOINT_URL;

//var express = require ('express');
//var app = express();
//var port = 8080;