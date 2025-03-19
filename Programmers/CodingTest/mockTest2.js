function getMax(a, b, c) {
    const maxValue = Math.max(a, b, c);
    const answer = [];
    if (maxValue <= a) {
        answer.push(1);
    }
    if (maxValue <= b) {
        answer.push(2);
    }
    if (maxValue <= c) {
        answer.push(3);
    }
    return answer;
    
}

function solution(answers) {
    let a_cnt = 0;
    let b_cnt = 0;
    let c_cnt = 0;
    
    const a = [1, 2, 3, 4, 5];
    const b = [2, 1, 2, 3, 2, 4, 2, 5];
    const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    for (let i=0; i<= answers.length; i++) {
        if (a[i%5] === answers[i]) {
            a_cnt+=1;
        }
        if (b[i%8] === answers[i]) {
            b_cnt+=1;
        }
        if(c[i%10] === answers[i]) {
            c_cnt+=1;
        }
    }
    const answer = getMax(a_cnt, b_cnt, c_cnt);
    return answer
    
}