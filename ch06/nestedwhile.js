let dan=2;
let num=1;

while(dan<10) {
    num=1;
    console.log(`${dan}단`);
    while(num<10){
        console.log(`${dan} X ${num} = ${dan*num}`);
        num++;
    }
    dan++;
    console.log(`\n`);
}
//label을 사용해 원하는 지점에 break/continue 호출 가능