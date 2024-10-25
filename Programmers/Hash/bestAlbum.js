function getSortedGenres(map) {
    const sortedGenres = [...map].sort((a, b) => a[1] - b[1]);
    return sortedGenres;
}
function solution(genres, plays) {
    var answer = [];
    let genresMap = new Map();
    for (let i = 0;i<genres.length; i++){
        if (!genresMap.get(genres[i])){
            genresMap.set(genres[i], plays[i]);
        } else {
            genresMap.set(genres[i], genresMap.get(genres[i]) + plays[i]);
        }
    }
    const sortedGenres = getSortedGenres(genresMap);
    
    return answer;
}