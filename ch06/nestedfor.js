//for (let i =2; 조건식;증감문){
//    for (let j =1; 조건식; 증감문) {
//        console.log(``);
//    }
//}

//내부 반복문이 종료되어야 외부 반복문의 다음 루프가 실행된다.
//for (let i =0;i<3; i++){
//    console.log(`i는 ${i}입니다.`)
//    for(let j=1;j<3;j++){
//        console.log(`j는 ${j}입니다.`)
//    }
//    console.log(`\n`)
//}

//2중 for 문을 사용해 2단~9단 구구단을 출력하세요.
for (let dan =2; dan<10; dan++){
    console.log(`${dan}단`);
    for(let num=1;num<10;num++){
        console.log(`${dan} X ${num} == ${dan * num}`)
    }
    console.log(`\n`)
}