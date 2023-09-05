var es5 = {
    name:"사이다",
    point:100
}

let es6 = new Object();
es6.name = "사이다"
es6.point = 100

console.log(`es5 : ${es5.name}, ${es5.point}`)
console.log(`es6 필드 접근 : ${es6.name}, ${es6.point}`)
console.log(`es6 키에 의한 접근 : ${es6[`name`]}, ${es6[`point`]}`)
