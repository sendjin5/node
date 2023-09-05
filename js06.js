//비구조 할당(Destructuring Assignment & Allocation)
//배열과 같은 자료구조(reference type)를 단일 기억장소(primitive type)로 변경
const person = ['kim', 'lee','park','choi','oh']    //배열 구조
let p1 = person[0];
let p2 = person[1];
let p3 = person[2];

const member = {
    id:"sider",
    age:31,
    addr:"인천",
    tel:"010-4928-1777"
}

let id = member.id;
let age = member.age;
let addr = member.addr;
let tel = member.tel;

//배열 구조를 분해하여 비구조 할당
let [k1, k2, k3, k4, k5] = person;
[k2, k1, k4, k3, k5] = [k1, k2, k3, k4, k5];    //비구조 할당값 변경

const [a, b, c] = ["java", "c#"];
console.log(`${a+b+c}`);        //c : undefined

const [d, e, f = 'NODE'] = ["java", "c#"]   // f : NODE
console.log(`${d+e+f}`);

//일부값 무시
const [g, , h, i ] = ["java", "c#", "react", "vue"]  // i : vue가 된다.
console.log(`${g+h+i}`);

//객체 분해
let {m1, m2, m3, m4} = member;
let {u1, u2, u3, u4} = {age:member.age, id:member.id};

console.log(`${m1+m2+m3+m4}`)
