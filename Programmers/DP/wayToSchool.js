// 오른쪽과 아래쪽만 이동이 가능하다.
// m, n 크기의 격자판.
// 오른쪽과 아래쪽으로만 움직여 집에서 학교까지 갈 수 있는 최단경로의 개수를 1,000,000,007로 나눈 나머지를 return
// 물에 잠긴 지역의 수는 0~10개
// 집은 (1, 1)에 위치, 학교는 (m, n)에 위치

// 이동하는 경우 (x, y-1), (x+1, y)
// m이 x축, n이 y축이다.

function solution(m, n, puddles) {
    const MOD = 1000000007;
    const dp = Array(n + 1).fill().map(() => Array(m + 1).fill(0));
    
    // 시작 위치
    dp[1][1] = 1;

    // 물 웅덩이 설정
    puddles.forEach(([x, y]) => {
        dp[y][x] = -1;
    });

    // dp 테이블 채우기
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (dp[i][j] === -1) {
                dp[i][j] = 0; // 웅덩이는 경로 없음
                continue;
            }

            if (i > 1) dp[i][j] = (dp[i][j] + dp[i - 1][j]) % MOD;
            if (j > 1) dp[i][j] = (dp[i][j] + dp[i][j - 1]) % MOD;
        }
    }

    return dp[n][m];
}
