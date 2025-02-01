function solution(numbers) {
  numbers = numbers.map(String);
  let answer = '';

  while (numbers.length > 0) {
    let maxNum = '0';
    let maxIdx = -1;

    numbers.forEach((num, idx) => {
      if (maxNum + num < num + maxNum) {
        maxNum = num;
        maxIdx = idx;
      }
    });

    answer += maxNum;
    numbers.splice(maxIdx, 1); // 선택한 숫자 제거
  }

  return answer[0] === '0' ? '0' : answer;
}
