console.log("What is your name?");

// Read input from the user
process.stdin.once("data", (data) => {
    const userName = data.toString().trim(); // Remove extra spaces or newlines
    console.log("Hello, " + userName + "! Welcome to JavaScript.");
    process.stdin.end(); // Close the input stream
});