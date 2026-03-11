const obj1={a:5,b:8};
const obj2=obj1;

let a=10;
let b=a;

a=15
a= console.log(b); //10->b=a;

obj2.a=10;

//참조형 데이터의 경우 복사 시, 값 복사가 아닌 참조값의 복사가 일어나기떄문에
//원본데티어를 변경시, 나머지에도 영향을 준다. 
console.log(obj1);
console.log(obj2);