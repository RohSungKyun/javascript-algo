// 최단거리는 bfs를 활용하는 것이 효율적이다.

function solution(maps) {
    
    var answer = bfs(maps)
    return answer;
}

function bfs(graph) {
    const N = graph.length; // 하드코딩하지말고 유연하게 선언
    const M = graph[0].length;    
    const visited = Array.from({length: N}, () => Array(M).fill(false));
    const dx = [0, 1, 0, -1]; // 방향 코드는 우, 하, 좌, 상으로 순서대로 작성
    const dy = [1, 0, -1, 0];
    const queue = [];
    queue.push([0, 0, 1]); // x, y, distance
    visited[0][0] = true;
    
    while (queue.length > 0) {

        const [x, y, distance] = queue.shift();
        
        if(x === N-1 && y === M-1) {
            return distance;
        }
        for(let i=0; i<dx.length; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if (
                nx>=0 && nx < N &&
                ny>=0 && ny < M &&
                visited[nx][ny] !== true &&
                graph[nx][ny] !== 0
            ) {
                queue.push([nx, ny, distance+1]);
                visited[nx][ny] = true;
            }
        }
    }
    return -1;
}