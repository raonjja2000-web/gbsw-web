const isLogin=true;
const isAdmin=false;

//&&(AND) 연산 -> 모든 항이 참이어야 true 반환
console.log(isLogin && isAdmin);//false

//||(OR) 연산 -> 둘 중 하나만 참이어도 true 반환
console.log(true || false);//true
console.log(false || false);//false

let id = "raon";
let pw="1234";
let correctId ="raon";
let correctPw="1234";
let result = (id === correctId && pw === correctPw) ? "로그인되었습니다" : "아이디 또는 비밀번호가 틀렸습니다";

console.log(result);