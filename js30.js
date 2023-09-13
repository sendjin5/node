const dbCon = require("./model/sample.js");
const express = require("express");
const app = express();
const bodyparser = require("body-parser")
let title = "";
let tmp1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>샘플</title>
</head>
<body>
    <ul>
        <li><a href="/">메인</a></li>
        <li><a href="/samplelist">목록</a></li>
        <li><a href="/sample/addSample">샘플 추가</a></li>
    </ul>
    <hr>
`;
let tmp2 = `</body>
</html>`;
app.get('/', (req, res) => {
    res.sendFile(__dirname+"/sampleMain.html");
});

app.get('/samplelist', (req, res) => {
    title = `<h2>샘플 항목</h2>`;
    let li = `<ul>`;
    dbCon.SampleList()
        .then((rows) => {
            rows.forEach((row) => {
                li = li + `<li><a href="/get/${row.NO}">${row.NAME}</a></li>`;
            });
            li = li + `</ul>`;
            res.send(tmp1+title+li+tmp2);
            console.log(rows);
        })
        .catch((errMsg) => {
            res.send(tmp1+title+errMsg+tmp2);
        });
});

app.get('/sample/get/:no', (req, res) => {
    title = `<h2>샘플 상세보기</h2>`;
    let body = "";
    dbCon.getSample(res.params.no)
        .then((row) => {
            let body = ((data) => {`<p>no : ${data.NO}, name : ${data.NAME }</p>
            <p><a href="/sample/updateSample/${data.NO}">수정</a></p>
            <p><a href="/sample/deleteSamplePro/${data.NO}">삭제</a></p>`});
            res.send(tmp1+title+body+tmp2)
            console.log(row);

        })
        .catch((errMsg) => {
            res.send(tmp1+title+errMsg+tmp2);
        });
});
app.get('/sample/addSample', (req, res) => {
    res.sendFile(__dirname+"/sample/sampleForm.html");
});
app.post('/addSamplePro', (req, res) => {
    let sample = {no:req.body.no, name:req.bodyp.name};
    dbCon.addSample(sample)
        .then((msg) => {
            console.log(msg);
            res.redirect("/sample/samplelist")
        })
        .catch((errMsg) => {
            res.send(tmp1+title+errMsg+tmp2);
        });
        Router.route.post("/add", (req, res) => {
            let sample = {no:req.body.NO, name:req.body.NAME}
        })
        res.sendFile(__dirname+"/sample/sampleMain.html");
});

let port = 4000;
app.listen(port, () => {
    console.log(`Sever Starting on ${port}`);
});