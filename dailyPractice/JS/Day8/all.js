// 題目一：字串輸出
function callString(string){
    stringSplit = string.split("")
    string_join = stringSplit.join('-')
    return string_join
}

// 題目二：字串數量
function checkFiveWord(string){
    if (string.length >= 5){
        return string.substr(0,2)
    }
    return string
}

// 題目三：函式強制正整數相乘
// 其餘參數（rest parameter)：讓我們表示不確定數量的參數，並將其視為一個陣列。
function multiply(...nums){
    absNums = nums.map(Math.abs);
    multiplyValue = absNums.reduce((acc,cur) => acc * cur)
    return multiplyValue;
}