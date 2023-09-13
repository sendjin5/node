const dbCon = require("./model/board.js");
const express = require("express");
const app = express();
const bodyparser = require("body-parser")
let title = "";
let tmp1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>게시판</title>
</head>
<body>
    <ul>
        <li><a href="/">메인</a></li>
        <li><a href="/board/boardList">목록</a></li>
        <li><a href="/board/addboard">추가</a></li>
    </ul>
    <hr>
`;

let tmp2 = `</body>
</html>`;



app.get('/', (req, res) => {
    res.sendFile(__dirname+"/board/boardMain.html");
});


app.get('/board/boardList', (req, res) => {
    title = `<h2>샘플 항목</h2>`;
    let li = `<ul>`;
    dbCon.boardList()
        .then((rows) => {
            rows.forEach((row) => {
                li = li + `<li><a href="/board/get/${row.bno}">${row.title}</a></li>`;
            });
            li = li + `<script>
            $(document).ready(function(){
                $.ajax({
                    url: "localhost:4000/board/boardList",
                    method: "get",
                    type: "json",
                    success: function(data){
                        console.log(data);
                    }
                })
            })
        </script>
        </ul>`;
            
            res.send(tmp1+title+li+tmp2);
            console.log(rows);
        })
        .catch((errMsg) => {
            res.send(tmp1+title+errMsg+tmp2);
        });
});


app.get('/board/get/:bno', (req, res) => {
    title = `<h2>샘플 상세보기</h2>`;
    let body = "";
    dbCon.getboard(res.params.bno)
        .then((row) => {
            let body = ((data) => {
            `<div class="contents">
            <th>
                <td></td>
                <td class="item1">bno : ${data.bno}</td>
            </th>
            <th>
                <td></td>
                <td class="item2">title : ${data.title }</td>
            </th>
            <th>
                <td></td>
                <td class="item3">content : ${data.content}</td>
            </th>
        </div>`
            res.send(tmp1+body+tmp2)
            console.log(row);

        })
        .catch((errMsg) => {
            res.send(tmp1+errMsg+tmp2);
        });
});
});
app.get('/board/addboard', (req, res) => {
    res.sendFile(__dirname+"/board/boardForm.html");
});
app.post('/addboardPro', (req, res) => {
    let board = {no:req.body.no, name:req.body.name};
    dbCon.addboard(board)
        .then((msg) => {
            console.log(msg);
            res.redirect("/board/boardlist")
        })
        .catch((errMsg) => {
            res.send(tmp1+title+errMsg+tmp2);
        });
        Router.route.post("/add", (req, res) => {
            let board = {no:req.body.bno, title:req.body.title, content:req.body.content}
        })
        res.sendFile(__dirname+"/board/boardMain.html");
});

let port = 4000;
app.listen(port, () => {
    console.log(`Sever Starting on ${port}`);
});