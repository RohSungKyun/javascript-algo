function solution(citations) {
  let answer = 0;
  let h_index = 0;
  let count = 0;
  let rearLength;
  citations.sort((a, b) => b - a);
  for (let i=0; i<citations.length; i++) {
    if (count >= h_index) { // 조건 1 인용횟수가 h-index이상인 논문이 h개 이상이다.
      h_index = citations[i];
      rearLength = citations.slice(i, ).length;
      if (rearLength < h_index){
        answer = h_index;
        break;
      }
    }
    count++;
  }
  return answer;
}