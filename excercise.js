// Task 1:

// 1.)

let students = ['Kenny', 'Jackie','Aliyah','Catherine','Maria'];

console.log("Original student list:");
for (let i=0; i<students.length; i++){
    console.log(students[i]);
}

// 2.)
console.log('Added a New Student to the list:');
students.push('Joseph');
console.log(students);

// 3.)
console.log('Removed the last student from the list');
students.pop();
console.log(students);

// 4.)
console.log("Updated Student list:");
students.forEach(student => console.log(student));

console.log('-------------------------------------------');

// ------------------------------------------------------------------------------------------------------

// Task 2
// 1.)

let numbers = [10, 20, 30, 40, 50];

console.log('Number list:')
for (let num of numbers) {
    console.log(num);
}

// 2.)

console.log('Sum of all numbers:');
let sum = 0;

numbers.forEach(num => {
    sum = sum + num;
})
console.log(sum);

// 3.)

console.log("Largest Number:");

let largest = numbers[0];
for (let num of numbers) {
    if (num > largest) {
        largest = num;
    }
}
console.log(largest);

console.log('-------------------------------------------');