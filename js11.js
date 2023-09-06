var test1 = [10,15,20,25,30];
console.log(test1.map(function(c) { return c<=20 }));    //일반 function
console.log(test1.map(c => c<=20));                      //arrow function
console.log(test1.map(c => {if(c<=20){ return c; }}));   //map을 쓰게 될 경우 undefined이 진행되며, 서버에서는 error가 뜬다.
console.log(test1.filter(c => {if(c<=20){ return c ;}})); 

//true false를 판별하고 싶을때는 map을 쓰고, undefined를 제외하고 싶다면 filter를 쓰라
