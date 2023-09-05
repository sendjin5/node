var a = 20;     //재선언 0, 변수값 변경 0
let b = 200;     //재선언 X, 변수값 변경 0
const c = 2000;   //재선언 X, 변수값 변경 X   상수값 위주로 씀
//백틱(backtick = ``)으로 감싼 문장 => 템플릿(template)
console.log("WoW! Good Man~!");
console.log("var 값" + a +", let 값" + b +", const 값" + c);
console.log(`var 값 : ${a}, let 값 :  ${b}, const 값 : ${c}`);

