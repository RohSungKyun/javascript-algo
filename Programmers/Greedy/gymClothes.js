function solution(n, lost, reserve) {
    const barrowable = lost.filter(l => !reserve.includes(l)).sort((a, b) => a - b);
    const canReserve = reserve.filter(r => !lost.includes(r)).sort((a, b) => a - b);
    let answer = n - barrowable.length;
    
    for (let i = 0; i < barrowable.length; i++){
        let lostNumber = barrowable[i];
        for (let j = 0; j < canReserve.length; j++){
            let reserveNumber = canReserve[j];
            if(reserveNumber === lostNumber-1 || reserveNumber === lostNumber + 1){
                answer +=1;
                canReserve[j] = -1;
                break;
            }
        }
    }
    
    return answer;
}