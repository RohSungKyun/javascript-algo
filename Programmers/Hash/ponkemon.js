// 최대로 고를 수 있는 포켓몬의 종류는 nums/2이다.
// 최대한 많은 포켓몬을 고르는 경우의 수를 구하는 문제이다.

function solution(nums) {
    var answer = new Set(nums).size;
    const pick_max = nums.length/2;
    
    return answer < pick_max ? answer : pick_max;
}