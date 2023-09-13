const http = require("http")
const express = require("express")
const app = express();
const server = http.createServer(app);
const port = 4000;

var tem1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>메인페이지</title>
</head>
<body>
    <nav id="navi">
            <a href="/">메인페이지</a>
            <a href="/sub">서브페이지</a>
            <a href="/detail">상세페이지</a>
    </nav>`
var tem2 = `</body>
</html>`

var home = `<h2>메인페이지</h2>`
var sub = `<h2>서브페이지</h2>`
var detail = `<h2>상세페이지</h2>`


app.get('/', (req, res) => {
    res.sendFile(__dirname+"/index.html");
});
app.get('/sub', (req, res) => {
    res.sendFile(__dirname+"/sub.html");
})
app.get('/detail', (req, res) => {
    res.sendFile(__dirname+"/detail.html");
})

server.listen(port, () => {
    console.log(`server running on http://localhost:${port}`) 
 })