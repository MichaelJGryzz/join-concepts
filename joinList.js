/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// ...

// Pseudocode Algorithm
// FUNCTION joinList(array, joiningString):
// # Step 1: Initialize an empty string for the result
// result = ""

// # Step 2: Iterate throught each element in the array
// FOR each element IN array:
// # Step 3: If result is not empty, add the joiningString
// We check why result is not empty as a way to avoid adding the joining string before the first element in the result string.
// IF result is not empty THEN:
// result = result + joiningString

// # Step 4: Add the current element to the result
// result = result + element

// # Step 5: Return the final result string
// RETURN result

// CODE ALGORITHM
const joinList = function(array, joiningString = ", ") {
  // # Step 1: Initialize an empty string for the result
  let result = "";

  // # Step 2: Iterate throught each element in the array
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    // # Step 3: If result is not empty, add the joiningString
    if (result !== "") {
      result = result + joiningString;
    }
    // # Step 4: Add the current element to the result
    result = result + element;
  }
  // # Step 5: Return the final result string
  return result;
};

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);