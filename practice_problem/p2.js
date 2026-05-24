// ### Q2. Valid Anagram Check

// Write a function to check if two strings are valid anagrams.

function isAnagram(str1,str2){
 str1 = str1.toLowerCase().replace(/\s/g, "")
  str2 = str2.toLowerCase().replace(/\s/g, "")

    if(str1.length =! str2.length){
        return false ;
    }else{
        const sorted1 = str1.split("").sort().join("")
    console.log(sorted1)
    const sorted2 = str2.split("").sort().join("")
    console.log(sorted2)

    return sorted1 === sorted2 ; }
}



console.log(isAnagram("Dormitoryyy", "Dirty room")) // true