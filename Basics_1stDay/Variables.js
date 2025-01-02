// Using var
console.log("Demo: var");
if (true) {
    var x = 10; // Function-scoped
    console.log("Inside if block, x =", x); // 10
}
console.log("Outside if block, x =", x); // 10

// Using let
console.log("\nDemo: let");
if (true) {
    let y = 20; // Block-scoped
    console.log("Inside if block, y =", y); // 20
}
// console.log("Outside if block, y =", y); // Error: y is not defined

// Using const
console.log("\nDemo: const");
const z = 30; // Block-scoped and immutable
console.log("Initial value of z =", z);
// z = 40; // Error: Assignment to constant variable
if (true) {
    const z = 50; // New block-scoped variable
    console.log("Inside if block, z =", z); // 50
}
console.log("Outside if block, z =", z); // 30