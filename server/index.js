const express = require("express");
const fetch = require('node-fetch');
const JACKPOTS = require("./jackpots");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.options('*', cors());

const port = process.env.PORT || 8080;
const serverAdress = process.env.SERVER_ADDRESS || 'localhost';

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", process.env.SERVER_ADDRESS); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });


app.get('/api/getgames', async (req, res) => {
    const result = await fetch('https://test-api.ginbits.com/23a09e35581fa0e82ab3cbfb853784da/v1/games.json').then(res=> res.json());
    console.log(result);
    res.status(200).send(result);
});


const getSomeRandomJackpots = (jackpots)=> {
    return jackpots.map(jackpot=> {
        const randomNumber = Math.floor(Math.random() * 101);
        jackpot.amount += randomNumber;
        return jackpot;
    });
};

app.get('/api/getjackpots',(req, res) => {
    const result = JACKPOTS;
    const newResult = getSomeRandomJackpots(result);
    res.status(200).send(newResult);
});

app.listen(port, () => console.log(`Server running on http://${serverAdress}:${port}`));
