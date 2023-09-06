//String.raw 태그함수 사용 : 템플릿을 문자열로 변환하여 저장
let s = String.raw`xy\n${1+1}z`;
let title = "템플릿 사용법"
let content = "템플릿 내용"
let s2 = String.raw`<html>
    <head>
        <title>${title}</title>
    </head>
    <body>
        <h2>${content}</h2>
    </body>
</html>`
//raw 프로퍼티의 사용
console.log(s2)

let item1 = "안녕"
let item2 = "그래"
let tag = function(strings, item1v, item2v){
    console.log(strings)
    console.log(item1v)
    console.log(item2v)
        return strings.raw[0]
    
}
let str = tag`Hello ${item1} NODE. ${item2}`;
console.log(str)




let r1 = String.raw`

<html>
    <head>
    <style>
        h2 {color:red }
    </style>
    </head>
    <body>
        <h2>우리는 하나다</h2>
    </body>
</html>`

console.log(r1)