let person = '사이다';
let age = 31;


//console.log(`당신의 이름은 ${person}이고, 나이는 ${age}입니다.`)
let tag = function(strings, personExp, ageExp){
    console.log(strings);   //[ '그 사람은 ', '은 ', ' 세 입니다.' ]
    console.log(personExp); //사이다
    console.log(ageExp);    //31
};

let output = tag`그 사람은 ${person}은 ${age} 세 입니다.`;
//문장과 데이터를 분리하기 위함