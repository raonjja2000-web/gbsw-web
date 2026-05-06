function solution(numbers) {
    var answer=0
    numbers.sort((a, b) => b - a);
    return numbers[0]*numbers[1]
}
    
//  let max=0

//     for(let i=0;i<numbers.length;i++){
//         if (numbers[i]>numbers[maxIndex]){
//             maxIndex=i
//         }
//     }
//     numbers[maxIndex]=0

//     maxIndex=0;
//     for(let i=0;i<numbers.length;i++){
//         if (numbers[i]>numbers[maxIndex]){
//             maxIndex=i
//         }
//     }
//     return numbers;
// }
// console.log(solution([0, 31, 24, 10, 1, 9]))
