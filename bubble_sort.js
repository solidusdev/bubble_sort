let sample_array = [63, 3, 846, 452, 71, 25];

const bubble_sort = arr => {

    // To not mutate the original array (shallow copy)
    const arr_copy = arr.slice();

    for(let i = 0; i < arr_copy.length; i++) {
        for(let j = i + 1; j < arr_copy.length; j++) {
            if(arr_copy[i] > arr_copy[j]) {
                [arr_copy[i], arr_copy[j]] = [arr_copy[j], arr_copy[i]];
            }
        }
    }
    return arr_copy;
};

console.log(bubble_sort(sample_array));   // [3, 25, 63, 71, 452, 846]

// To unit test (Jest)
module.exports = bubble_sort;