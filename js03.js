//사용자가 만든 것은 var로 , 기본 내장되어 있는 js는 const로 불러온다.

var calc = require('./calc1');
console.log(`더하기 = ${calc.add(17, 5)}`);
console.log(`빼  기 = ${calc.sub(17, 5)}`);
console.log(`곱하기 = ${calc.mul(17, 5)}`);
console.log(`나누기 = ${calc.div(17, 5)}`);
console.log(`나머지 = ${calc.mod(17, 5)}`);

