const express = require('express')
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());

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
var port = app.listen(process.env.PORT || 3030);
console.log(`App listening at port ${port}`)