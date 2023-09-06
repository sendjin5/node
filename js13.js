const fs = require("fs");

//동기 방식 : 한꺼번에 파일 전체 내용을 불러올 경우
var syncData = fs.readFileSync('./kim.txt', 'utf8');
console.log(syncData)

