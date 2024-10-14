function getTime(progresses, speeds){
    var times = [];
    for (let i =0; i<progresses.length; i++){
        times.push(Math.ceil((100-progresses[i])/speeds[i]));
    }
    return times;
}
function solution(progresses, speeds) {
    var answer = [];
    var times = getTime(progresses, speeds);
    var maxVal = times[0];
    var cnt = 1;
    for (let i = 1; i<times.length; i++){ // i 의 범위 설정 문제
        if (times[i] <= maxVal){ //같은 속도도 같이 배포된다.
            cnt++;
        } else{
            answer.push(cnt);
            maxVal = times[i];
            cnt = 1;
            
        }
        
    }
    answer.push(cnt); // 마지막 배포를 for 문이 끝난 뒤에도 추가해야 한다.
    return answer;
}