// N을 자유롭게 이용해서 number를 만드는 최소 횟수를 반환
// 1번 -> N
// 2번 -> 사칙연산 + NN -> 5가지
// 3번 -> 1번과 2번의 방법을 조합해서 경우의 수 구함
// 4번 -> 1번과 3번을 조합해서, 2번과 2번을 조합해서 number를 구함...
// 최대 8번 까지 사용하고 초과하면 -1을 반환한다.
// dp의 인덱스는 해당 수를 사용한 횟수이다.

function solution(N, number) {
    const dp = Array.from({length : 9}, () => new Set()); // 중복을 없애기 위해 set을 사용, 

    for (let i = 1; i <= 8; i++) {
        dp[i].add(Number(String(N).repeat(i))); // N을 나란히 이어 붙인 경우를 추가
        for (let j = 1; j <= i; j++ ){
            for (let num1 of dp[j]) {
                for (let num2 of dp[i-j]) {
                    dp[i].add(num1 + num2);
                    dp[i].add(num1 - num2);
                    dp[i].add(num1 * num2);
                    dp[i].add(Math.floor(num1/num2));
                }
            }
        }
        if(dp[i].has(number)){
            return i;
        }
    }
    return -1;
}