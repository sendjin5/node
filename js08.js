//요게 제이슨이다.
//객체 배열 안에 객체가 있는 것이다.
const ramenList = [
    {
        brand : '농심',
        items : ['신라면', '너구리', '짜파게티', '둥지냉면']
    },
    {
        brand : '삼양',
        items : ['삼양라면', '불닭볶으면']
    },
    {
        brand : '오뚜기',
        items : ['진라면', '진짬뽕', '진짜장']
    },
    {
        brand : '팔도',
    }
];


console.log(`구매가능한 ${ramenList[0].brand} : ${ramenList[0].items}`);
console.log(`구매가능한 ${ramenList[3].brand} : ${ramenList[3].items}`);

var fn = function(strings, brand, items){
    if(items === undefined){    
        return (`구매 가능한 ${brand}라면 품절`)
    }else{
        return (strings[0] + brand + strings[1] + items)
    };
}

for(var all in ramenList){
    console.log(fn`구매가능한 ${ramenList[all].brand}라면: ${ramenList[all].items}`);
}