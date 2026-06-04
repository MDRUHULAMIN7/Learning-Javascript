// ### Q6. Implement Promise.all from Scratch

// Implement `Promise.all` from scratch.


function myPromiseAll(promises) {
    // ১. Promise.all নিজে একটি নতুন Promise রিটার্ন করে
    return new Promise((resolve, reject) => {
        const results = []; // সব প্রমিজের সফল আউটপুট এখানে জমা হবে
        let completedPromises = 0; // কয়টি প্রমিজ সফল হলো তা গুনতে

        // যদি ইনপুট অ্যারে খালি হয়, তবে সরাসরি খালি অ্যারে রিজলভ করে দেবো
        if (promises.length === 0) {
            resolve(results);
            return;
        }

        // ২. লুপ চালিয়ে প্রতিটি প্রমিজকে এক এক করে প্রসেস করা
        promises.forEach((promise, index) => {
            // Promise.resolve(promise) লেখার কারণ হলো, ইনপুটে প্রমিজের বদলে সরাসরি কোনো ডাটা (যেমন: নম্বর বা স্ট্রিং) থাকলেও যেন সেটা প্রমিজ হিসেবে হ্যান্ডেল হয়
            Promise.resolve(promise)
                .then((value) => {
                    // ৩. সফল হলে ইনপুট ইনডেক্স অনুযায়ী ফলাফল জমা রাখা
                    results[index] = value;
                    completedPromises++;

                    // ৪. যখন সব প্রমিজ শেষ হবে, তখনই কেবল মেইন প্রমিজটি রিজলভ হবে
                    if (completedPromises === promises.length) {
                        resolve(results);
                    }
                })
                .catch((error) => {
                    // ৫. যেকোনো একটা প্রমিজ ফেইল করলেই সাথে সাথে পুরোটা রিজেক্ট
                    reject(error);
                });
        });
    });
}

const p1 = Promise.resolve(10);
const p2 = new Promise((res) => setTimeout(() => res(20), 1000)); // ১ সেকেন্ড সময় নিবে
const p3 = 30; // সাধারণ ভ্যালু (এটিও হ্যান্ডেল হবে)

myPromiseAll([p1, p2, p3])
    .then((res) => console.log("Success:", res))
    .catch((err) => console.log("Error:", err));