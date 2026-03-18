const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("나이를 입력하세요. :",function(age){
    //성인 판별
    //나이는 1~100살 이내 범위여야 합니다.
    //19세 이상인 경우 "성인입니다"
    //19세 미만인경우 "미성년자입니다"
    if(age>=19 && age<=100){
        console.log("성인입니다.");
    }else if(19>age && age>=1){
        console.log("미성년자입니다.");
    }else{
        console.log("유효하지 않은 값입니다.");
    }
    rl.close()
});