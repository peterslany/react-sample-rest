const express = require('express')
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 3030;

//enter your api key here
const API_KEY="";

app.get('/articles', async (req, res) => {
    await fetch(
        "https://content.guardianapis.com/search?api-key=" + API_KEY + "&page-size=12&q=" +
          req.query.q + "&page=" + req.query.page
      ).then(async (response) => {
        const result = await response.json();
        return res.send(result);
        });
})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))