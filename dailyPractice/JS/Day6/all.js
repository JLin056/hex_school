// 題目一：日幣計算機 (1:0.32)
function TWDtoJPY(num){
    if (typeof(num) == 'string'){
        return "當我看不懂字串？？";
    } else if (num < 0) {
        return "...沒錢別來亂";
    } else {
        return `你換到的日幣有：${num / 0.32}`;
    }
}

// 題目二：匯率計算機
function TWDtoAnother(num, string){
    if (string == "USD"){
        return num * 29;
    } else if (string == "HKD"){
        return num * 3;
    } else if (string == "GBP"){
        return num * 35;
    } else {
        return "...";
    }
}

// 題目三：BMI 計算機
function BMI(height, weight){
    BMI_score = weight / ((height/100) **2) ; 
    if (BMI_score < 18.5){
        return "過輕";
    } else if (BMI_score >= 18.5 && BMI_score < 24){
        return "正常";
    } else if (BMI_score >= 24 && BMI_score < 27){
        return "過重";
    } else if (BMI_score >= 27 && BMI_score < 30){
        return "輕度肥胖";
    } else if (BMI_score >= 30 && BMI_score < 35){
        return "中度肥胖";
    } else {
        return "重度肥胖";
    }
}

// 進階題：字串切割+if
function isPrime(num){
    factor = []
    for (i = 1; i <= num; i++){
        if (num % i == 0){
            factor.push(i)
        }
    }
    if (factor.length == 2){
        return true;
    }else {
        return false;
    }
}
function sum(string){
    num = string.split(",");
    num1 = Number(num[0]);
    num2 = Number(num[1]);
    num3 = Number(num[2]);
    
    if (isPrime(num1)){
        return num2 + num3;
    } else if (num1 % 2 == 0){
        return num2 - num3;
    } else {
        return num2 * num3;
    }
}