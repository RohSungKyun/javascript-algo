function solution(citations) {
    let h_index = 0;
  
    citations.sort((a, b) => b - a);
    for (let i =0; i<citations.length; i++) {
        if(citations[i] >= i+1) {
            h_index = i+1;
        } else{
            break;
        }
    }
    
    return h_index;
  }