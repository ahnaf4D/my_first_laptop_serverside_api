const express = require('express');
const app = express();
const port = 3000;
const laptops = require('./laptops.json');
app.get('/', (req, res) => {
    res.send('laptops coming soooon!')
})
app.get('/laptops',(req , res) => {
    res.send(laptops)
})
app.listen(port, () => {
    console.log(`server running at ${port}`);
})