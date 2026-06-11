// ### Q18. DOM Traversal

// Write an algorithm to traverse a DOM tree and find all elements with a specific class name without using `document.querySelectorAll`.

// DOM ট্রি ট্রাভার্স করে নির্দিষ্ট ক্লাস নেম খুঁজে বের করার ফাংশন
function findElementsByClassName(className, root = document.body) {
    const result = [];
    
    // রিকার্সিভ ফাংশন ব্যবহার করে সব এলিমেন্ট চেক করি
    function traverse(node) {
        // যদি এটি একটি এলিমেন্ট নোড হয় (nodeType === 1)
        if (node.nodeType === 1) {
            // এলিমেন্টের ক্লাস লিস্ট চেক করি
            if (node.classList && node.classList.contains(className)) {
                result.push(node);
            }
        }
        
        // সব চাইল্ড নোড ট্রাভার্স করি
        for (let child of node.childNodes) {
            traverse(child);
        }
    }
    
    traverse(root);
    return result;
}

// ========== ইটারেটিভ অ্যাপ্রোচ (Stack ব্যবহার করে) ==========
function findElementsByClassNameIterative(className, root = document.body) {
    const result = [];
    const stack = [root];
    
    while (stack.length > 0) {
        const node = stack.pop();
        
        // যদি এলিমেন্ট নোড হয় এবং ক্লাস ম্যাচ করে
        if (node.nodeType === 1 && node.classList.contains(className)) {
            result.push(node);
        }
        
        // সব চাইল্ড নোড স্ট্যাকে যোগ করি
        for (let child of node.childNodes) {
            stack.push(child);
        }
    }
    
    return result;
}

// ========== BFS অ্যাপ্রোচ (Queue ব্যবহার করে) ==========
function findElementsByClassNameBFS(className, root = document.body) {
    const result = [];
    const queue = [root];
    let index = 0;
    
    while (index < queue.length) {
        const node = queue[index++];
        
        if (node.nodeType === 1 && node.classList.contains(className)) {
            result.push(node);
        }
        
        for (let child of node.childNodes) {
            queue.push(child);
        }
    }
    
    return result;
}

// ========== টেস্ট কোড ==========

// HTML তৈরি করি টেস্টের জন্য
document.body.innerHTML = `
    <div class="container">
        <p class="highlight">প্যারাগ্রাফ ১</p>
        <div class="highlight">ডিভ ১
            <span class="highlight">স্প্যান ১</span>
        </div>
    </div>
    <section class="highlight">সেকশন
        <p class="highlight">প্যারাগ্রাফ ২</p>
    </section>
`;

console.log("=== রিকার্সিভ মেথড ===");
const result1 = findElementsByClassName("highlight");
console.log(`মোট এলিমেন্ট: ${result1.length}`);
result1.forEach((el, i) => console.log(`${i + 1}. ${el.tagName}: ${el.textContent.trim()}`));

console.log("\n=== ইটারেটিভ মেথড (Stack) ===");
const result2 = findElementsByClassNameIterative("highlight");
console.log(`মোট এলিমেন্ট: ${result2.length}`);
result2.forEach((el, i) => console.log(`${i + 1}. ${el.tagName}: ${el.textContent.trim()}`));

console.log("\n=== BFS মেথড (Queue) ===");
const result3 = findElementsByClassNameBFS("highlight");
console.log(`মোট এলিমেন্ট: ${result3.length}`);
result3.forEach((el, i) => console.log(`${i + 1}. ${el.tagName}: ${el.textContent.trim()}`));