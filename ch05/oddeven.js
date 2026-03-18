const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("정수를 입력하세요. :",function(score){
    // 점수는 0~100점 사이 범위
    //90점 이상이면
    //60점 이상이면 합격
    //60점 미만이면 불합격
    if(score>=90){
        console.log("장학대상입니다.");
    }else if(90>score && score>=60){
        console.log("합격입니다.");
    }else if(60>score && score>=0){
        console.log("불합격입니다.");
    }else{
        console.log("유효하지 않은 값입니다.");
    }
    rl.close()
});