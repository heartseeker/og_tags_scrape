const express = require('express');
const app = express();
const url = require('url');
let grabity = require("grabity");
var port = process.env.PORT || 3000; 
const cors = require('cors');

app.use(cors())


app.get('/scrape',  async (req, res) => {
  const url_parts = url.parse(req.url, true);
  const query = url_parts.query.url;

  const it = await grabity.grabIt(query);

  res.json(it);
 });

app.listen(port, () => {
 console.log('Server running on port 3000');
});
