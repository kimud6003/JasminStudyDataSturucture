var readline = require('readline-sync');
const STR = readline.question('');
    
var strlen = STR.length;
var ans =strlen;

for(let k =1; k<= strlen/2; k++){
    let cnt = 0, i = 0;
    while(i<strlen){
        let same_n=0,next = 0;
        if(i + k > strlen){
            cnt+= strlen - i ; 
        }  

        for(let j = i + k; j < strlen ; j+=k){
            let t=0;
                for(; t < k; t++){
                    if(STR[i+t] != STR[j+t]) break;
                }
            if( t == k ) same_n ++;
            else {
                next = j; break;
            }
        }
        if(same_n){
            if(same_n + 1 <= 9)cnt += k + 1;
            else if(same_n + 1 <= 99)cnt += k + 2;
            else if(same_n + 1 <= 999)cnt += k + 3;
            else  cnt += k + 4;
            }

        else cnt+= k;
        if(next == 0)break;
        i = next;
    }
if(cnt < ans) ans = cnt;
}
console.log(ans);