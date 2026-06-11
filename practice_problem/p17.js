//Memoization (Performance Optimization)

function memoize(fn){
    const cache = {};
    return function(n){

        console.log(n)
        if(cache[n]) return cache[n];

        cache[n]=fn(n);
        return cache[n]
    }

}

const square = memoize(n => n*n);

console.log(square(5))
console.log(square(5))
console.log(square(3))