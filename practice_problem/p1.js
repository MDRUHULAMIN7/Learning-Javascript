// ### Q1. Flatten Nested Array (No .flat())

// Implement a function to flatten a deeply nested array without using `.flat()`.

// # Solution

// recurtion Function 

function flatten(arr){
let result = []
for( let item of arr){

if(Array.isArray(item)){
  result.push(...flatten(item))
} else{
result.push(item)
     }
 }

 return result


}
console.log(flatten([ 1, 2, [ 3, 4 ,[5,6]] ]))