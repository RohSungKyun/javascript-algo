// 다리에 완전히 오르지 않은 트럭은 무시
// 모든 트럭은 weight 이하이다.
// 트럭은 동시에 bridge_length만큼 올라갈 수 있다.
function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    const bridge = []; // 다리를 지나는 트럭
    let now_weight = 0;
    while(truck_weights.length > 0){
      answer++;
      if(bridge.length === bridge_length){
        now_weight -= bridge.shift();
      }
       
      if(now_weight + truck_weights[0] > weight){ // 한계 중량을 초과하는 경우
        bridge.push(0);
        continue;
      }
          
      let truck_weigth = truck_weights.shift();
      bridge.push(truck_weigth);
      now_weight += truck_weigth;
    }
    answer += bridge_length;
    return answer;
  }