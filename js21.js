//Express를 인스톨하여 서버 진행이 더 간단해짐
const http = require("http")
const express = require("express")
const app = express();
const server = http.createServer(app);
const port = 4000;

app.get('/', (req, res) => {
    res.send("Hello Man~")
});


server.listen(port, () => {
   console.log(`server running on http://localhost:${port}`) 
})


