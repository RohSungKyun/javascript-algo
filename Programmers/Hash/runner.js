function solution(participant, completion) {
    let answer = [];
    let map = new Map();
    for (let x of participant){
        if (!map.has(x)){ //새로 등록하기
            map.set(x, 1);
        } else{
            map.set(x, map.get(x)+1);
        }
    }
    // 참여자 전부가 들어간 해시맵에서 완주자를 차감
    for (let x of completion){
        if(map.has(x)){
            map.set(x, map.get(x)-1);
        }
    }
    for (x of participant){
        if(map.has(x) && map.get(x) >= 1){
            answer = x;
        }
    }
    return answer;
}