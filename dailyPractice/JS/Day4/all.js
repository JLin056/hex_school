// 題目一：比大小
function higher(num1, num2){
    return num1 > num2;
}

// 題目二：布林反轉
function booleanToggle(boolean){
    return !boolean;
}

// 題目三：型別判斷
function checkType(value){
    return typeof(value);
}

// 題目四：打八折後，是否總價大於 100 元
function onSale(value){
    return value * 0.8 > 100;
}

// 題目五：是否大於 200，且符合會員條件
function checkVIP(value, boolean){
    return ( value > 200 && boolean == true);
}