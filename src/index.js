const express = require('express')
const cors = require('cors')
const routes  = require('./routes')

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)

var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`http://api.rioben.org.br:3000`);
});