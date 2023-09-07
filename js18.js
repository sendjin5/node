const http = require("http")
const url = require("url")
const qs = require("querystring")
var tem = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>메인페이지</title>
</head>
<body>
    <nav>
        <ul>
            <li><a href="/?id=LEE">LEE</li>
            <li><a href="/?id=PARK">PARK</li>
            <li><a href="/?id=LEE"></li>
        </ul>
    </nav>
    <div class="container">
        <h2>${queryDate.id}</h2>
    </div>
</body>
</html>`;


const app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html; charset=UTF-8'})
    
    res.end(tem)
});


app.listen(3000);