// Reference packages
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/angular-d3-graph-example'));

app.get('/*', function(req, res) {
  res.sendFile(path.join('./dist/angular-d3-graph-example/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
