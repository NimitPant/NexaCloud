function findEquilibriumPoint(arr) {
  // First, calculate the total sum of the entire array.
  const totalSum = arr.reduce((acc, num) => acc + num, 0);

  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    // The right sum can be calculated by subtracting the left sum and the current element
    // from the total sum.
    const rightSum = totalSum - leftSum - arr[i];

    // Check if the left sum equals the right sum.
    if (leftSum === rightSum) {
      // If they are equal, we've found the equilibrium point.
      return i;
    }

    // If not, add the current element to the left sum for the next iteration.
    leftSum += arr[i];
  }

  // If no equilibrium point is found after checking all elements, return -1.
  return -1;
}

// --- Example Usage ---

// Define an example array with numbers between 1 and 10.
const numbers = [1, 7, 3, 6, 5, 6];

// Find the equilibrium point in the array.
const equilibriumIndex = findEquilibriumPoint(numbers);

if (equilibriumIndex !== -1) {
  console.log(`The equilibrium point is at index: ${equilibriumIndex}`);
  console.log(`The element at this index is: ${numbers[equilibriumIndex]}`);
} else {
  console.log("No equilibrium point found in the array.");
}

// --- Explanation ---
// For the array [1, 7, 3, 6, 5, 6]:
// - At index 0 (element 1): left sum = 0, right sum = 27. Not equal.
// - At index 1 (element 7): left sum = 1, right sum = 20. Not equal.
// - At index 2 (element 3): left sum = 8, right sum = 17. Not equal.
// - At index 3 (element 6): left sum = 11, right sum = 11. EQUAL!
// The equilibrium index is 3. 