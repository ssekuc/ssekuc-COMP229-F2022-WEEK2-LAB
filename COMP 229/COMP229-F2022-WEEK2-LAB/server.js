const connect = require('connect');
const app = connect();
const http = require('http')

app.use('/json' , (req, res) => {
    res.writeHead(200, {'Content-Type' : 'application/json'});
    res.write(JSON.stringify({message: 'Hello World'}));
    res.end();
})

app.use('/html' , (req,res) => {
    res.end('<h1>Hello World in Html</h1>')
})

app.use('/' , function(req,res) {
    res.end('Hello World')
})

http.createServer(app).listen(3000);