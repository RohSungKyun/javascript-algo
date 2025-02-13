function solution(n, computers) {
    let networkCount=0;
    const visited = new Array(n).fill(false);

    function bfs(startNode){
        visited[startNode] = true;
        let queue = [startNode];

        while(queue.length>0) {
            let node = queue.shift();
            for(let neighbor = 0; neighbor < n; neighbor++) {
                if(computers[node][neighbor] ===1 && !visited[neighbor] ){
                    queue.push(neighbor);
                    visited[neighbor] = true;
                }
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if(!visited[i]) {
            bfs(i);
            networkCount++;
        }
    }

    return networkCount;
}