function solution(distance, rocks, n) {
    var answer = 0;
    rocks.sort((a, b) => a-b);
    let start = 1;
    let end = distance;

    while(start <= end) {
        const mid = Math.floor((start+end)/2);
        let remove = 0;
        let previous_rock = 0;

        for(let i=0; i<rocks.length; i++){
            if(rocks[i] - previous_rock <= mid){
                remove++;
            } else{
                previous_rock = rocks[i];
            }
        }
        if (remove > n) {
            end = mid -1;
        } else {
            start = mid +1;
            answer = Math.max(answer, start);
        }
    }

    return answer;
}