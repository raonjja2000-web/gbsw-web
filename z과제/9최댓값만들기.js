function solution(numbers) {
    var answer=0
    //numbers.sort((a, b) => b - a);
    let max=0

    for(let i=0;i<numbers.length;i++){
        if (numbers[i]>numbers[max]){
            max=i
        }
    }
    let maxI = numbers[maxIndex]
    numbers[maxIndex]=0

    maxIndex=0;
    for(let i=0;i<numbers.length;i++){
        if (numbers[i]>numbers[maxIndex]){
            maxIndex=i
        }
    }
    return numbers;
}
console.log(solution([0, 31, 24, 10, 1, 9]))
