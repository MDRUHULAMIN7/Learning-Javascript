//Chenk the number is Prime or not

function primeNumber(num){
    if(num < 2) return false;

for ( let i = 2 ;i < num ; i++ ){
    console.log(num,i)
    console.log(num % i)
if(num % i === 0){
    return false
}


} return true;

}
console.log(primeNumber(11))