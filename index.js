var http = require('http');
http.createServer(function (req, res) {
    res.write('hiiii mi nobre ewksdlflsdfs');
    res.write(`hola amigo: ${req.url}`);
    res.end();
}).listen(process.env.PORT || 3000);