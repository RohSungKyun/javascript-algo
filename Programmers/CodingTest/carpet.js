function solution(brown, yellow) {
    var answer = [0, 0];
    const space = brown + yellow;
    for (let width = space-1; width>0; width--){
        if (space%width !== 0) continue;
        
        let height = space/width;
        let y = (width-2) * (height-2);
        let b = space - y;
        if(y === yellow && b === brown) {
            answer[1] = width;
            answer[0] = height;
        }
    }
    return answer;
}