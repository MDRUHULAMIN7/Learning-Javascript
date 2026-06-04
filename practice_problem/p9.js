// ### Q10. Deep Clone of Nested Object

// Write a function that performs a deep clone of a nested object.


const originalUser = {
    name: "Rahat",
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};


//shallowCopy
// const copy = {... originalUser}
// copy.address.city = "shylet"


// deepCopy
const deepCopyUser = structuredClone(originalUser);
deepCopyUser.address.city = "shylet"
console.log(deepCopyUser)
console.log(originalUser)

// console.log(copy)


