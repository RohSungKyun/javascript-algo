function solution(sizes) {
    var answer = 0;
    let max_w = 0;
    let max_h = 0;
    for (let i=0; i<sizes.length; i++){
        let [width, height] = sizes[i].sort((a, b) => a - b)
        max_w = Math.max(max_w, width);
        max_h = Math.max(max_h, height);
        answer = width*height;
    }
    
    return answer;
}