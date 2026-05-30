// ### Q4. Two Sum Problem

// Implement the Two Sum problem: Given an array of integers and a target, return the indices of the two numbers that add up to the target.

//Solution 1

const arr = [2, 7, 11, 15];
targetedNum =22;

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    for (let j = i+1; j < arr.length; j++) { 
        console.log(arr[j]);
        console.log(arr[i]+arr[j])
        if(arr[i]+arr[j]  === targetedNum){
            console.log(`targeted Number is ${arr[i]}"+" ${arr[j]} "=" ${arr[i]+arr[j]}`)

        }
    }
}

//Solution 2
const arr = [2, 7, 11, 15];
const targetedNum = 22;

function twoSumHashMap(nums, target) {
    const myMap = new Map(); // এখানে আমরা সংখ্যা এবং তাদের ইনডেক্স জমা রাখব

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const requiredNum = target - currentNum; // আমাদের আর কত দরকার (কমপ্লিমেন্ট)

        // ১. ম্যাপের ভেতর প্রয়োজনীয় সংখ্যাটি (requiredNum) আছে কিনা চেক করা
        if (myMap.has(requiredNum)) {
            // যদি থাকে, তবে ম্যাপ থেকে তার ইনডেক্স এবং বর্তমান ইনডেক্স রিটার্ন করব
            return [myMap.get(requiredNum), i];
        }

        // ২. যদি না থাকে, তবে বর্তমান সংখ্যাটিকে তার ইনডেক্সসহ ম্যাপে সেভ করে রাখব
        myMap.set(currentNum, i);
    }

    return []; // যদি কোনো জোড়া না পাওয়া যায়
}

console.log(twoSumHashMap(arr, targetedNum)); 
// আউটপুট দেখাবে: [1, 3] (কারণ ৭ এর ইনডেক্স ১ এবং ১৫ এর ইনডেক্স ৩)