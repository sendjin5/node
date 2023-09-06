const fs = require("fs");
let content = "이게 ES6다."
fs.writeFile('./kim2.txt', content, (err) => {
    fs.readFile('./kim2.txt', 'utf8', function(err, data){
        console.log(data);
    })
})

let content2 = "다음엔 무엇을 만들어 볼까요."
fs.writeFileSync('./kim3.txt', content2)
var data = fs.readFileSync('./kim3.txt', 'utf8');
console.log(data)

//내용추가
fs.readFile('./kim2.txt' , 'utf8', (err, data) => {
    var con = data + "내용추가합니다."
    fs.writeFile('./kim2.txt', con, (err) => {
        console.log(con);
    })
});

//이름변경
fs.rename('./kim1.txt', './lee1.txt', (err, data) => {
    console.log('./lee1.txt');
})