function solution(triangle) {
    var answer = 0;
    const dp = triangle.slice();
    
    for (let i = dp.length - 2; i >= 0; i--){
        for(let j = 0; j<dp[i].length; j++) {
            dp[i][j] += Math.max(dp[i+1][j], dp[i+1][j+1]);
        }
    }
    answer = dp[0][0]
    return answer;
}