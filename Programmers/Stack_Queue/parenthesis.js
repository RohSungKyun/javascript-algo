function solution(s){
    var answer = true;
    var stack = [];
    for (let x of s){
        if(x === '('){
            stack.push(x);
        } 
        if(x === ')'){
            if(stack.length === 0){
                answer = false;
                break; // 스택이 비어있을 때 pop을 하면 에러
            }
            stack.pop();
        };
    }
    if (stack.length !== 0){
        answer = false;
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}