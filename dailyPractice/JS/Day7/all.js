// 題目一：有沒有打折
function sale(num){
    if (num >= 4000) return num * 0.7;
    if (num >= 3000) return num * 0.8;
    if (num >= 2000) return num * 0.9;
    if (num < 2000) return num;
}

// 題目二：水果顏色查詢機
function fruitColor(string){
    const fruit = {
        "香蕉": "黃色",
        "蘋果": "紅色",
        "葡萄": "紫色",
        "奇異果": "綠色",
        "橘子": "橘色",
        "藍莓": "藍色",
    } 

    if (!fruit[string]){
        return "查無此水果";
    } 

    return fruit[string];
}

// 題目三：年薪計算機
function annualSalary(num1, num2){
    if (num2 > 5) return num1 * (12 + 1.3);
    if (num2 > 1) return num1 * (12 + 1);
    if (num2 <= 1) return num1 * (12);
}
