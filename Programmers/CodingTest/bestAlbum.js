function solution(genres, plays) {
    const answer = [];
    const genreMap = new Map(); // 장르별 총 재생 수와 앨범 정보 저장
    
    for (let i=0; i<genres.length; i++) {
        let genre = genres[i];
        let play = plays[i];
        if (!genreMap.has(genre)) { // 장르가 없을 경우
            genreMap.set(genre, {total : 0, music : []}); // 재생 횟수와 수록곡 번호, 재생수
        }
        genreMap.get(genre).total += play;
        genreMap.get(genre).music.push([i, play]);
    }
    
    const sortedMusic = [...genreMap.entries()].sort((a, b) => {
        return b[1].total - a[1].total
    });
    
    for (let [genre, {music}] of sortedMusic) {
        music.sort((a, b) => { // 0은 고유num, 1은 개별 재생수
            if (a[1] === b[1]) { // 둘의 재생수가 같다면!
                return a[0] - b[0];
            } else {
                return b[1] - a[1];
            }
        })
        for (let i=0; i<Math.min(2, music.length); i++) { // albums가 2보다 작을 경우 고려
            answer.push(music[i][0]);
        }
    }
    
    return answer;
}