const http = require('http')

let myname = "사이다";
let content = String.raw`<h2>${myname}</h2>`;
const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/html; charset=UTF-8'});
    res.end(content)
});
//node port 번호 : 3000 / 익스프레스 : 4000 / 리액트 : 5000
server.listen(3000)

//jsp = index.jsp / servlet = main.controller / spring = home