function solution(genres, plays) {
    const answer = [];
    const genreMap = new Map(); // 장르별 총 재생 수와 앨범 정보 저장
    
    for (let i=0; i<genres.length; i++){
        let genre = genres[i];
        let play = plays[i];
        
        if (!genreMap.has(genres[i])){
            genreMap.set(genres[i], {totalPlay:0, albums:[]});
        }; // 장르, 전체 재생 횟수, 각 앨범 정보 배열
        
        genreMap.get(genres[i]).totalPlay += play;
        genreMap.get(genres[i]).albums.push([play, i]);
    };
    const sortedGenres = [...genreMap.entries()].sort((a, b) => {
        return b[1].totalPlay - a[1].totalPlay
    }); // map에는 정렬기능이 없으므로 entries를 통해 배열로 만들어 정렬

    for (let [genre, {albums}] of sortedGenres) {
        albums.sort((a, b) => {
            if(a[0] === b[0]){
                return a[1] - b[1];
            } else{
                return b[0] - a[0];
            }
        });
        for (let i=0; i<Math.min(2, albums.length); i++){
            answer.push(albums[i][1]);
        }
    }
    
    return answer;
}