// 題目一：成年計算機 ( 備註：18 歲為成年年紀 )
function checkAdult(num){
    if (num < 18) {
        return "未成年";
    } else {
        return "成年";
    }
}

// 題目二：法定性行為年紀計算機( 16歲 )
function canSex(num, gender){
    if (num < 16){
        return "你還不行喔～";
    } else {
        return "可以色色";
    }
}

// 題目三：滿 300 即可符合優惠條件，能使用 50 元折價券
function buy(num){
    if (num < 0) {
        return "再鬧我就生氣了哦~";
    } else if (num === 0) {
        return "...你來亂的嗎？";
    } else if (num > 0 && num < 300) {
        return `不符合優惠券資格，費用是 ${num}`;
    } else if (num === 300) {
        return `剛好符合資格，費用是 ${num - 50}`;
    } else {
        return `符合優惠券資格，費用是 ${num - 50}`;
    }
}

// 進階題，不適合新手
function isPrime(num){
    if (num < 0) {
        return "無法判別";
    } else if (num > 100) {
        return "我只能算 100 以內的質數計算，原諒我QQ";
    } else {
        factor = [];
        for (let i = 1; i <= num; i++){
            if (num % i == 0) {
                factor.push(i)
            }
        }

        if (factor.length == 2){
            return "是質數"
        } else {
            return "不是質數"
        }
    }
}