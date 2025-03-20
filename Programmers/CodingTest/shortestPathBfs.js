// 최단거리는 bfs를 활용하는 것이 효율적이다.

function solution(maps) {
    
    var answer = bfs(maps)
    return answer;
}

function bfs(graph) {
    const N = graph.length;
    const M = graph[0].length;
    const visited = Array.from({length:N}, () => Array(M).fill(false));
    const dx = [0, -1, 0, 1];
    const dy = [-1, 0, 1, 0];
    
    const queue = [];
    visited[0][0] = true;
    queue.push([0, 0, 1]); // x, y, distance
    while(queue.length > 0) {
        const [x, y, distance] = queue.shift();
        if (x === N-1 && y === M-1) {
            return distance;
        }
        for (let i=0; i<dx.length; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if (
                nx >= 0 && nx<N &&
                ny >= 0 && ny<M &&
                !visited[nx][ny] && 
                graph[nx][ny] === 1
            ) {
                queue.push([nx, ny, distance+1]);
                visited[nx][ny] = true;
            }
        }
    }
    return -1;
}