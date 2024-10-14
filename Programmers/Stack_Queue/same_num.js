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