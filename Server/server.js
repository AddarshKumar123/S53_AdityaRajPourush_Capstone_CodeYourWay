const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json);


app.get('/', (req, res)=> res.send(`Server running on port ${port}`))

app.listen(port, ()=> console.log(`Listening on port ${port}`));