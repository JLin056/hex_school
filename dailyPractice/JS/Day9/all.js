// 題目一：陣列長度計算
function checkLength(array){
    return array.length;
}

// 題目二：增減陣列內容
function aryControl(string, text){
    if (string == "增加"){
        ary.unshift(text)
    } else if (string == "刪除指定筆數") {
        ary.splice(text-1, 1)
    }
}

const ary = [];
aryControl("增加","black");
console.log(ary);
aryControl("增加","red");
console.log(ary);
aryControl("增加","white");
console.log(ary);
aryControl("增加","blue");
console.log(ary);
aryControl("刪除指定筆數",3);
console.log(ary);
aryControl("刪除指定筆數",1);
console.log(ary);

// 題目三：for+陣列相加產生器，邏輯思考題
function addAry(num){
    let sum = 0;
    for (var i = 0; i < num; i++){
        sum += numAry[i]
    }
    return sum
}

const numAry = [1,2,3,4,5]
addAry(1);
addAry(2);
addAry(3);
addAry(4);
addAry(5);