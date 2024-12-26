function solution(numbers, target) {
    var answer = 0;
    dfs(0, 0);
    function dfs(index, value){
        if(index === numbers.length){ // 모든 노드(숫자)를 다 사용했을 경우
            if(target === value){
                answer++;
            }
            return;
        }
        dfs(index+1, value + numbers[index]);
        dfs(index+1, value - numbers[index]);
    }
    return answer;
}