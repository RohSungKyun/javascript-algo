function solution(arr)
{
    var answer = [];
    for (let i =0; i<arr.length; i++){
       if(i === 0 || answer[answer.length - 1] !== arr[i]){
           answer.push(arr[i])
       }
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    return answer;
}

// 다른 사람의 풀이, filter를 활용한 간단한 풀이가 존재했다.
// function solution(arr){
//     return arr.filter((val, idx) => val !== arr[idx+1]);
// }