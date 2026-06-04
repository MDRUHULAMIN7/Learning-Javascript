// ### Implement Throttle

// Implement a throttle function.
// Throttle = Function execution delay করা, এবং delay শেষ হওয়ার আগে আবার call হলে আগের timer cancel না করে নতুন timer start না করা।

function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}

// Throttle কী?

// ধরো একটা scroll event listener আছে।

// window.addEventListener("scroll", handleScroll);

// User যদি scroll করে:

// scroll event অনেক বার trigger হবে।

// কিন্তু আমরা চাই:

// User scroll করা শুরু করার 500ms পরে handleScroll চলুক।
// মাঝখানে আবার scroll করলে timer reset হবে না।

// এটাই Throttle।