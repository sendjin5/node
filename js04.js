//ES5 함수 정의와 호출
var fnc1 = function(){          //매개변수 X, 반환 X
    console.log("콜솔출력")
}

var fnc2 = function(a, b){          //매개변수 0, 반환 X
    console.log("결과2 : "+(a+b))
}

var fnc3 = function(){          //매개변수 X, 반환 0
    return 27*27;
}

var fnc4 = function(a, b){          //매개변수 0, 반환 0
    return a*10+b*9;
}

//익명의 함수 : 특정 로직이나 함수(메소드) 안에 있는 이름이 없이 곧 바로 실행
var arr = [75, 80, 90, 95]
arr.map(function(value){
    console.log(value*value);
})

var fnc5 = arr.map(function(value){
    return value*value
})

fnc1();
fnc2(20, 20);
//var data3 = fnc3();
console.log("결과3 : " + fnc3());
//var data4 = fnc4(13, 12);
console.log("결과4 : " + fnc4(13, 12));
console.log("결과5 : " + fnc5);
