function solution(clothes) {
    var answer = 0;
    // 배열을 순회하면서 맵에 저장
    let map = new Map();
    for (let [name, category] of clothes){
        map.set(category, (map.get(category)||0)+1);
    }
    let combination = 1;
    for (let value of map.values()){
        combination = combination * (value + 1);
    }

    
    return combination-1;
}