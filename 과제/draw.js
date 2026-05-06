//draw(n)함수를 작성하시오.
//draw(5)
// *
// **
// ***
// ****
// *****

function draw(n){
    //반복문을 중첩해서 사용할 것
    for (let i = 1; i <= n; i++){
        let str=""
        //i는 i번째 줄을 담당한다.
        for(let j=1; j<=i;j++){
            str+="*";
            //i번째 줄의 별의 개수를 담당한다.
        }
        console.log(str);
    }
}
console.log(draw(5))