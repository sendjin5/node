//Arrow Function(화살표 함수) => 자바의 람다식과 같으며, ES6(2015)부터 지원함
/*
1. 매개변수가 없는 경우
var 함수명 = () => {....}

2. 매개변수가 하나인 경우
var 함수명 = 변수명 => {....}

3. 매개변수가 여러개인 경우
var 함수명 = (변수명1, 변수명2) => {....}

4. 반환이 있는 경우
var 함수명 = (변수명1, 변수명2) => { return 반환식 또는 값;}
var 함수명 = (변수명1, 변수명2) => { 반환식 또는 값;}
4-2 여러줄인경우
var 함수명 = (변수명1, 변수명2) => { 
    
    반환식 또는 값;}
*/
//ES5 함수 정의와 호출

//익명의 함수 : 특정 로직이나 함수(메소드) 안에 있는 이름이 없이 곧 바로 실행
var arr = [75, 80, 90, 95]
arr.map(function(value){
    console.log(value*value);
})

var fnc1 = () => {          //매개변수 X, 반환 X
    console.log("콜솔출력")
}

var fnc2 = (a, b) => {          //매개변수 0, 반환 X
    console.log("결과2 : "+(a+b))
}

var fnc3 = () => 27*27;       //매개변수 X, 반환 0

var fnc4 = (a, b) => a*10+b*9          //매개변수 0, 반환 0

var fnc5 = arr.map(value => value*value)

fnc1();
fnc2(20, 20);
//var data3 = fnc3();
console.log("결과3 : " + fnc3());
//var data4 = fnc4(13, 12);
console.log("결과4 : " + fnc4(13, 12));
console.log("결과5 : " + fnc5);
