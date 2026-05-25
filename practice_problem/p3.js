// ### Q3. Move Zeroes to End

// Given an array of numbers, move all zeroes to the end while maintaining the relative order of the non-zero elements.

 function movesZero(arr){

    let result = [];
    let zeroCount = 0 ;
    for ( num  of arr){

        if(num === 0){
            zeroCount++
        }else{
            result.push(num)
        }
    }

    for(let i =0;i < zeroCount; i++){
        result.push(0)
    }

    return result
 }

 console.log(movesZero([1, 7, 2, 0, 0, 5]))