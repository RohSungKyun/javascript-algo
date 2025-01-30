// 가장 큰 수 를 만들려면 맨 앞에 오는 각 숫자의 첫번재 숫자는 가장 큰 수여야함.
// 이를 반복, 문자열로 처리 필요

function solution(numbers) {
    let maxValue = '0';
    var answer = '';
    for (let number of numbers) {
      if (String(number).substring(0, 1) > maxValue.substring(0, 1)) {
        
      }
      for (let i=0; i<number.length; i++) {
        
      }
    }
    return answer;
}