//Find Second Largest Number


function secondLargest(arr) {
  const unique = [...new Set(arr)]; // Remove duplicates
//   console.log(unique);
  unique.sort((a,b)=>b-a); // Sort in descending order
    // console.log(unique);
    return unique[1] || -Infinity;
    
}

console.log(secondLargest([3, 1, 4, 1, 5, 9])); // Output: 5
console.log(secondLargest([10, 20, 30, 40, 50])); // Output: 40
console.log(secondLargest([5, 5, 5, 5])); // Output: -Infinity (no second largest)