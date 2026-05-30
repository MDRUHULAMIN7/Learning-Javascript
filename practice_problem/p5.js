// ### Q5. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

const words = ["flower", "flow", "flight"];

function longestCommonPrefix(strs) {
    if (strs.length === 0) return ""; // অ্যারে খালি হলে খালি স্ট্রিং রিটার্ন করব

    // ১ম শব্দটাকে প্রাথমিক prefix ধরলাম
    let prefix = strs[0]; 

    // ২য় শব্দ থেকে শেষ শব্দ পর্যন্ত লুপ চালাব
    for (let i = 1; i < strs.length; i++) {
        
        // indexOf(prefix) !== 0 এর মানে হলো prefix টি বর্তমান শব্দের শুরুতে মিলছে না
        while (strs[i].indexOf(prefix) !== 0) {
            
            // শুরু থেকে মিল না পাওয়া পর্যন্ত prefix-এর শেষ থেকে ১টি করে অক্ষর কেটে ছোট করছি
            prefix = prefix.substring(0, prefix.length - 1);
            
            // যদি কাটতে কাটতে prefix একদম খালি হয়ে যায়, তার মানে কোনো মিল নেই
            if (prefix === "") return "";
        }
    }

    return prefix;
}

console.log(longestCommonPrefix(words)); // আউটপুট দেখাবে: "fl"