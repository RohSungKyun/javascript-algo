// 최단거리는 bfs를 활용하는 것이 효율적이다.

function solution(maps) {
    
    var answer = bfs(maps)
    return answer;
}

function bfs(graph) {
    const visited = Array.from({length: 5}, () => Array(5).fill(false));
    const dx = [0, 1, -1, 0];
    const dy = [1, 0, 0, -1];
    const queue = [];
    queue.push([0, 0, 0]); // x, y, distance
    visited[0][0] = true;
    
    while (queue > 0) {
        const [x, y, distance] = queue.shift();
        
        if(x === 4 && y === 4) {
            return distance;
        }
        for(let i=0; i<dx.length; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if (
                nx>=0 && nx<5 &&
                ny>=0 && ny<5 &&
                visited[nx][ny] !== true &&
                graph[nx][ny] !== 0
            ) {
                queue.push([nx, ny, distance+=1]);
                visited[nx][ny] = true;
            }
        }
    }
    return -1;
}