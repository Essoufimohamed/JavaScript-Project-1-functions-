// Function Find the Smallest and Biggest Numbers in the Array
function minMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return [min, max];
}

// Sum of Cubes
function sumOfCubes(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        let cub = nums[i] ** 3;
        sum += cub;
        typeof i;
    }

    return sum;
}

// Filter out Strings from an Array
function filterArray(arr) {
    let arrays = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == typeof 1) {
            arrays.push(arr[i]);
            // console.log(arrays);
        }
    }
    return arrays;
}

// Is the Number Symmetrical?
function isSymmetrical(num) {
    let numRev =
        parseFloat(num.toString().split("").reverse().join("")) *
        Math.sign(num);
    if (num == numRev) {
        return true;
    } else {
        return false;
    }
}

// Special Arrays
function isSpecialArray(arr) {
    let check = 0;
    let check2 = 0;
    for (let i = 0; i < arr.length; i += 2) {
        check++;
        if (arr[i] % 2 == 0 && arr[i + 1] % 2 != 0) {
            check2++;
        }
    }
    return check == check2;
}

// How Much is True?
function countTrue(arr) {
    let numberTrue = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == true) {
            numberTrue += 1;
        }
    }
    return numberTrue;
}

// Convert Key, Values in an Object to Array
function objectToArray(object) {
    let objKeys = Object.keys(object);
    let objValues = Object.values(object);
    let arrayObj = [];
    for (let i = 0; i < objKeys.length; i++) {
        arrayObj.push([objKeys[i], objValues[i]]);
    }
    return arrayObj;
}

// Array of Multiples
function arrayOfMultiples(num, length) {
    let arr = [];
    for (let i = 1; i <= length; i++) {
        let multiple = num * i;
        arr.push(multiple);
    }
    return arr;
}

// 25-Mile Marathon
function marathonDistance(d) {
    let marathon = 25;
    let sum = 0;
    for (let i = 0; i < d.length; i++) {
        sum += Math.sign(d[i]) * d[i];
    }
    return marathon == sum;
}

function squareDigits(n) {
    let digit = n.toString();
    let squart = "";

    for (let i = 0; i < digit.length; i++) {
        squart += Math.pow(parseInt(digit[i]), 2);
    }
    return parseInt(squart);
}
