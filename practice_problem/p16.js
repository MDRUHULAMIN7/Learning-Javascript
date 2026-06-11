// Write a function to deeply flatten an object (convert nested objects into a single-level object with dot-notation keys, e.g., user.profile.name) 


function flattenObject(obj, prefix = '', result = {}) {
    // console.log(obj)
    // console.log(prefix,"dddddd")
    // console.log(result)
    for (const key in obj) {
        console.log(key)
        if (obj.hasOwnProperty(key)) {
            const newKey = prefix ? `${prefix}.${key}` : key;
            
            if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                flattenObject(obj[key], newKey, result);
            } else {
                result[newKey] = obj[key];
            }
        }
    }
    return result;
}

// Example usage
const user = {
    name: "Ruhul",
    profile: {
        age: 25,
        city: "New York",
        address: {
            street: "123 Main St",
            zip: "10001"
        }
    },
    hobbies: ["coding", "reading"]
};

const flattened = flattenObject(user);
console.log(flattened);