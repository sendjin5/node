const http = require('http')
let port = 3000;
let host = '127.0.0.1';
let myname = '사이다'

let content = String.raw`"<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${myname}메인페이지</title>
</head>
<body>
    <div class="container">
        <h2>${myname}메인페이지</h2>
    </div>
</body>
</html>"`;
const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/html; charset=UTF-8'});
    res.end(content)
});

server.listen(port, host, () => {
    console.log(`server running at http://${host}:${port}`);
})
