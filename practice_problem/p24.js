//Find the most frequent character in a string

function maxCharecter(str){
    const obj = {}
    let max = 0;
    let maxChar = "";
    for (let char of str){
        console.log(obj)
        console.log(obj[char])
        console.log(max)
        console.log(maxChar)
        console.log("--------")
        obj[char] = (obj[char] || 0)+1;
        if(obj[char] > max){
            max = obj[char];
            maxChar = char
        }
    }
    return maxChar
}

console.log(maxCharecter("ruhuhhl"))