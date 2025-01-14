function solution(array, commands) {
    var answer = [];
    
    for(let command of commands){
        [i, j, k] = command;
        let temp = array.slice(i-1, j).sort();
        let sortedValue = temp.sort((a, b) => a-b);
        
        answer.push(sortedValue[k-1]);
    }
    return answer;
}