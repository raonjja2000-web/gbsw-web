//new키워드 사용하는것이 정석방법
//const obj = new Object()
//객체 내 값은 프로퍼티, 함수는 메서드라고 부릅니다.
const obj={
    name: "징주아",
    age: 17,
    //객체 내 메서드 선언
    sayHello: function(msg){
        console.log("안녕하세요."+msg);
    }
};
obj.sayHello("테스트입니다.");

obj.name ="장주아2"//속성 값 수정 가능

//첫 선언 때 없던 속성인 경우, 동적으로 추가된다.
obj.gender="female";
//delete키워드를 사용해 속성을 지정해 삭제할 수 있다.
delete obj.gender;

// console.log(obj["name"]);
console.log(obj)

//대괄호 혹은 . 이용하여 프로퍼티 참조 가능
// obj["name"];
// obj.name

let id="1234";
let pw="5678";

//키값을 제외하는경우
const obj2={
    id,
    pw,
};
console.log(obj2)
