function solution(arr, delete_list) {
    var answer = [];
    //hint 1. arr 배열을 순회한다.
    //hint 2.delete_list 배열을 순회하며,
    //       arr 배열 내 i번쨰 원소가 해당 배열에 존재하는지 확인한다.
    for (let i =0; i<arr.length;i++) {
        let flag=true;
        for(let j=0;j<delete_list.length;j++){
            if(arr[i]===delete_list[j]){
                flag=false;
            }
        }
        if(flag){
            answer.push(arr[i]);
        }
    }
    return answer;
}