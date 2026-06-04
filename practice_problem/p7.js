// Write your own custom Array.prototype.map function.

Array.prototype.myMap = function(callback) {
const result = [];
console.log(this)
console.log(callback(this))
for(let i = 0; i < this.length; i++) {
console.log(callback(this[i]))
result.push(callback(this[i], i, this));
}

return result;
};

const nums = [6, 2, 3];

const doubled = nums.myMap(num => num + 2);

console.log(doubled);


// Array.prototype.myMap = function(callback) {
// ```

// - `myMap` নামে একটা custom method বানানো হয়েছে।
// - যেকোনো array এখন `myMap()` ব্যবহার করতে পারবে।

// ```jsx
// this
// ```

// - `this` হচ্ছে যে array থেকে `myMap()` call করা হয়েছে।
// - এখানে:

// ```jsx
// const nums = [6, 2, 3];
// nums.myMap(...)
// ```

// তাই `this = [6, 2, 3]`

// ---

// ```jsx
// callback
// ```

// - `callback` হচ্ছে function parameter।
// - এখানে:

// ```jsx
// num => num + 2
// ```

// - তাই callback প্রতিটি সংখ্যার সাথে `2` যোগ করবে।

// ---

// ```jsx
// for(let i = 0; i < this.length; i++)
// ```

// - Loop array-এর প্রতিটি element-এর উপর চলবে।

// ---

// ```jsx
// callback(this[i])
// ```

// Loop-এর সময়:

// ```jsx
// callback(6) // 8
// callback(2) // 4
// callback(3) // 5
// ```

// ---

// ```jsx
// result.push(...)
// ```

// - Callback থেকে পাওয়া result নতুন array-তে জমা হচ্ছে।

// ```jsx
// result = [8, 4, 5]
// ```

// ---

// ```jsx
// return result
// ```

// - শেষে নতুন array return করা হচ্ছে।

// ---

// ### Execution Flow

// ```jsx
// nums.myMap(num => num + 2)
// ```

// ↓

// ```jsx
// 6 + 2 = 8
// 2 + 2 = 4
// 3 + 2 = 5
// ```

// ↓

// ```jsx
// result = [8, 4, 5]
// ```

// ↓

// ```jsx
// return [8, 4, 5]
// ```

// ↓

// ```jsx
// console.log([8, 4, 5])
// ```

// **মূল ধারণা:** `myMap()` array-এর প্রতিটি element-এর উপর callback function চালায়, callback যা return করে সেগুলো নতুন array-তে রাখে, তারপর সেই নতুন array return করে।