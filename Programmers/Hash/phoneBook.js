function solution(phone_book) {
    var answer = true;
    phone_book.sort(); // 짧은 문자열이 앞에 오도록 하기 위해 정렬
    for (let i =0; i<phone_book.length - 1; i++){
        if(phone_book[i] === phone_book[i+1].substring(0, phone_book[i].length)){ // startwith를 쓰기도 함.
            answer = false;
        }
    }
    return answer;
}
// 두 번째 풀이