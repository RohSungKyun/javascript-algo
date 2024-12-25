function solution(prices) {
    var answer = [];
    for (let i = 0; i< prices.length; i++){
      let temp = 1;
      for(let j = i+1; j<= prices.length; j++){
        // 주식 가격이 떨어졌거나 배열 탐색이 끝난경우
        if (prices[i] > prices[j] || j === prices.length-1){
          answer.push(temp);
          break;
        }
        temp++;
      }
    }
    answer.push(0) // 마지막 값은 가격이 떨어지지 않는다.
    return answer;
  }