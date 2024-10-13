function getMaxValue(a, b, c){
    var maxVal = Math.max(a, b, c);
    var ans = [];
    if(maxVal <= a){
        ans.push(1);
    }
    if(maxVal <= b){
        ans.push(2);
    }
    if(maxVal <= c){
        ans.push(3);
    }
    return ans;

};

function solution(answers) {
    var answer = [];
    let a_cnt = 0;
    let b_cnt = 0;
    let c_cnt = 0;
    const a = [1, 2, 3, 4, 5];
    const b = [2, 1, 2, 3, 2, 4, 2, 5];
    const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    for (let i=0; i<answers.length; i++){
        if(a[i%5] === answers[i]){
            a_cnt+=1;
        }
        if(b[i%8] === answers[i]){
            b_cnt+=1;
        }
        if(c[i%10] === answers[i]){
            c_cnt+=1;
        }
    }
    answer = getMaxValue(a_cnt, b_cnt, c_cnt);
    return answer;
}
