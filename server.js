const express = require('express');
const path = require('path');
require('dotenv').config();
require("./mongo");

const app = express();
const PORT = process.env.PORT || 3000;
__dirname = path.resolve();

app.use("/projo", require("./api/controllers/projects"));

if (process.env.NODE_ENV === "prod")
{
    app.use(express.static(path.join(__dirname, './app/build')));
    app.get('*', (_, res) => {
        res.sendFile(__dirname, 'app', 'build', 'index.html');
    })
}
else
{
    app.get('/api', (_, res) => {
        res.status(200).send('Welcome on maxPortfolio Api');
    })
}

//app.use(express.json());

app.listen(PORT, () => {
    console.log(`server listen on port ${PORT}`)
})