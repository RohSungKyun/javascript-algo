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

function solution2(numbers) {
  const strings = numbers.map(number => String(number));
  const maxValue = strings.sort((a, b) => (b+a) - (a+b)).join('');
  let answer;
  if(maxValue[0] !== '0') {
    answer = maxValue;
  } else{
    answer = '0';
  }
  return answer;
}
