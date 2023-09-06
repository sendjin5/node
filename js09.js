console.log("1. 첫 번째 줄\n두 번째 줄");
console.log(`2. 첫 번째 줄
두번째 줄`);
//백틱은 템플릿 등 다양하게 사용 똑같이 EL 이라 하여 다른 진행과 혼동될 수 있으나, 중요

const class1 = `header ${ isLargeScreen() ? '' : `icon-${item.isCollapsed ? `expander` : `collapser`}`}`;