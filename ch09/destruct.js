//비구조화 할당
const color=["R","G","B"];
const langs=["C#","JS","Java","PHP","Rust","C++","Kotlin"];


const arr1=[1,2];
const arr2=[3,4];

const arr3=[...arr1, ...arr2];


// let r = color[0];
// let g = color[1];
// let b = color[2];

//대괄호를 사용해 배열 구조 분해 할당
let[r,g,b]=color;

//표현식에 = {기본값} 형태로 기본값 지정 가능
let[first,second,third="C"]=langs;

//전개 연산자 사용하여 배열의 나머지 부분을 처리하거나, 배열끼리 결합 가능
let[first,second,third="C", ...rest]=langs;
console.log(rest)

//,를 이용해 다음 요소로 건너뛰기 가능
let [csharp, , java, php]=langs;

let asdf=10;
let zxcv=15;

//별도 변수 없이 서로 값 변경 가능
[asdf,zxcv]=[zxcv,asdf];

const user={
    id:"gbsw",
    pw:"1234",
    name:"장주아",
    age:17
};

//비구조화 할당
//배열이나 객체를 해체하여 변수에 할당하는 것을 비구조화 할당이라고 한다.
const color =["R","G","B"];
const langs=["C#","JS",""]

let[r, g, b ="C"]=["c#","js","Java","php"];

// [b,g,r]=[r,g,b];
console.log(r);//b
console.log(g);//g
console.log(b);//r


const user={
    id:"gbsw",
    pw:"1234",
    name:"장주아",
    age:17
};

// let id=user.id
// let pw=user.pw
// let name=user.name
// let age=user.age

let {id2, ...other}=user;
console.log(others);