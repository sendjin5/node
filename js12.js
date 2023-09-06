//리드파일
const fs = require("fs");

//비동기 방식 : 불러온 데이터 중에서 일부만 컨트롤하는 경우
fs.readFile('./kim.txt', 'utf8', function(err, data){
    console.log(data);
})