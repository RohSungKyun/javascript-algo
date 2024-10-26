function getSortedGenres(map) {
    const sortedGenres = [...map].sort((a, b) => b[1] - a[1]);
    return sortedGenres;
}
function solution(genres, plays) {
    var answer = [];
    let genresMap = new Map();
    const allAlbum = [];
    for (let idx = 0; idx<genres.length; idx++){
        let tmp =[genres[idx], plays[idx], idx]; // 장르, 재생수, 인덱스
        allAlbum.push(tmp); // 모든 음악을 저장
    }
    for (let i = 0;i<genres.length; i++){
        if (!genresMap.get(genres[i])){
            genresMap.set(genres[i], plays[i]);
        } else {
            genresMap.set(genres[i], genresMap.get(genres[i]) + plays[i]);
        }
    }
    const sortedGenres = getSortedGenres(genresMap);
    for (let genre of sortedGenres){
        let count = 0;
        for (let album of allAlbum){
            if (genre === album[0]){ // 같은 장르일 경우
                
            }
        }
    }
    
    return answer;
}