//1부터n까지 반복하면서,
//짝수는 더하고, 홀수는 뺴는 함수 calc(n)을 작성하시오.
//최종 결과값을 반환히시오.

function calc(n){
    let sum=0;
    //1부터 n까지 반복
    for (let i = 1;i<=n;i++){
        if (i%2===0){
            //짝수는 더한다
            sum+=i;
        }else{
            //홀수는 뺀다
            sum-=i;
        }
    }
    return sum
}
console.log(calc(6))
//-1+2-3+4-5+6
//3