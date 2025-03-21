function solution(phone_book) {
  let answer = true;
  phone_book.sort(); // 사전순 정렬을 해야 O(N)으로 해결 가능

  for (let i=0; i<phone_book.length; i++) {
    if (phone_book[i+1] && phone_book[i+1].startsWith(phone_book[i])) {
        answer = false;
    }
  }
  return answer;
}