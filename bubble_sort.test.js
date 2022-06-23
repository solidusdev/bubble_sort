// Import the sorting function
const bubble_sort = require("./bubble_sort");

test("array as arguement to be sorted", () => {
    const array_sample = [4,32,1];  // Unsorted
    expect(bubble_sort(array_sample)).toEqual([1,4,32]);
});
