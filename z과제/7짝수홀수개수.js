function solution(num_list) {
    //num_list 안의 홀수와 짝수 개수를 배열로 반환
    //홀수와 짝수 개수를 알아내야한다.
    //num_list 배열을 순회하며 홀수와 짝수를 카운트한다
    let a=0;//짝수의 개수
    for(let i=0;i<num_list.length;i++){
        if(num_list[i]%2===0){
            //짝수
            a++;
        }
    }
    return[a,num_list.length-a]
}

console.log(solution([1, 2, 3, 4, 5]));