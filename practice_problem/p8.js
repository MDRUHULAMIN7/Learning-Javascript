// ### Implement Debounce

// Implement a debounce function.
// Debounce = Function execution delay করা, এবং delay শেষ হওয়ার আগে আবার call হলে আগের timer cancel করে নতুন timer শুরু করা।

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

// Debounce কী?

// ধরো একটা search input আছে।

// input.addEventListener("input", search);

// User যদি টাইপ করে:

// h
// he
// hel
// hell
// hello

// তাহলে search() ৫ বার call হবে।

// কিন্তু API call expensive হতে পারে। তাই আমরা চাই:

// User টাইপ করা বন্ধ করার 500ms পরে search চলুক।
// মাঝখানে আবার টাইপ করলে timer reset হবে।

// এটাই Debounce।