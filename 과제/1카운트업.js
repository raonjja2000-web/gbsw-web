function solution(start_num, end_num) {
    console.log(start_num);
    console.log(end_num);
    var answer = [];
    for (let i = start_num; i <= end_num; i++) {
        answer.push(i)
    }
    return answer;
}

solution(3, 10)