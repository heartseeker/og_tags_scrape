const express = require('express');
const app = express();
const url = require('url');
var fs = require('fs');
var https = require('https');
let grabity = require("grabity");
var port = process.env.PORT || 3000; 
const cors = require('cors')

app.use(cors())


app.get('/scrape',  async (req, res) => {
  const url_parts = url.parse(req.url, true);
  const query = url_parts.query.url;

  console.log(query);
  const it = await grabity.grabIt(query);

  res.json(it);
 });

app.listen(3000, () => {
 console.log('Server running on port 3000');
});


// https.createServer({
//   key: fs.readFileSync('server.key'),
//   cert: fs.readFileSync('server.cert')
// }, app)
// .listen(port, function () {
// console.log(`Go to https://localhost:${port}/`)
// })

// process.on('uncaughtException', function(e) {
//   console.log('An error has occured. error is: %s and stack trace is: %s', e, e.stack);
//   console.log("Process will restart now.");
//   process.exit(1);
// })
