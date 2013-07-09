var express = require('express');


var buf = fs.readFileSync("index.html");
var index = buf.toString('utf-8');


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(index);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


var financeurl = function(symbols, columns) {
    return util.format(
	'http://finance.yahoo.com/d/quotes.csv?s=%s&f=%s',
	symbols.join('+'),
	columns);
};
