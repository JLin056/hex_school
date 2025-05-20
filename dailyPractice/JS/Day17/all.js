// 題目一：陣列與物件排序
function callAry(string, ary){
    if (string == "正序"){
        ary.sort((a, b) => a.score - b.score);
    } else if (string == "反序") {
        ary.sort((a, b) => b.score - a.score); 
    } else {
        return '請輸入 "正序" 或 "反序"';
    }
    return ary;
}

// 題目二：篩選資料
const scoreAry2 = [
    {
        name:"葉子",
        score:99
    },
    {
        name:"洧杰",
        score:60
    },
    {
        name:"卡斯伯",
        score:80
    }
];
function callAry2(minScore) {
    let filteredList = scoreAry2.filter(e => e.score >= minScore)
    // console.log(filter)
    if (filteredList.length == 0) {
        console.log(`沒有人分數在${minScore}分以上`);
    } else {
        let names = filteredList.map(obj => obj.name).join("");
        console.log(`${names}分數有在${minScore}分以上`);
    }
}

// 題目三：選出從零到指定數字範圍裡面的質數
function prime(maxNumber) {
    function isPrime(num){
        if (num < 2) return false;
        factor = [];
        for (let i = 1; i <= num; i++){
            if (num % i == 0) {
                factor.push(i);
            }
        }

        if (factor.length == 2){
            return true;
        } else {
            return false;
        }
    };
    
    primes = [];
    for (let i = 1; i <= maxNumber; i++){
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    console.log(primes.join(","));
}