// 현재 문자열의 노드와 단 하나의 철자만 다른 문자열을 가진 노드 판별
// 즉, 하나의 단어만 다른 문자이다.
function isConnected(str1, str2) {
  let count = 1;
  const length = str1.length;

  for(let i = 0; i <length; i++) {
    if(str1[i] !== str2[i]) count++;
  }

  return count === 1 ? true : false;
}

function solution(begin, target, words) {
  const visited = { [begin] : 0};
  const queue = [begin];

  while (queue.length) {
    const current = queue.shift();
    if(current === target) break;
    
    for(const word of words) {
      if(isConnected(word, current) && !visited[word]) { // 연결이 되어 있고 아직 방문하지 않은 단어
        visited[word] = visited[current] + 1;
        queue.push(word);
      }
    }
  }
  return visited[target] ? visited[target] : 0;
}