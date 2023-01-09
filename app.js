console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// function printOdds(count) {
//     if(count < 0 ) {
//         console.log(`Let me help you with that`)
//         count = Math.abs(count);
//     }
//     for (let i = 0; i <= count; i++ ) {
//         if(i % 2 !== 0) {
//             console.log(i);
//         }
//     }
// };
// printOdds(-50);
// printOdds(75);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

// function checkAge(userName, age) {
//   if (userName == undefined) {
//     userName = `Stranger`;
//   }
//   let aboveSixteen = `Congrats ${userName}, you can drive!`;
//   let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
//   if (typeof age != `number`) {
//     console.log(`Hey ${userName}, you need to tell me how old you are.`);
//   } else if (age < 16) {
//     console.log(belowSixteen);
//   } else {
//     console.log(aboveSixteen);
//   }
// }

// checkAge(`Chris`, 35);
// checkAge(`Quinn`, 7);
// checkAge();

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

// function quadrant(x, y) {
//   if (x == 0 && y == 0) {
//     console.log(`At origin 0,0`);
//   } else if (x == 0) {
//     console.log(`on y axis`);
//   } else if (y == 0) {
//     console.log(`on x axis`);
//   } else if (x > 0 && y > 0) {
//     console.log(`in 1st quadrant`);
//   } else if (x < 0 && y > 0) {
//     console.log(`in 2nd quadrant`);
//   } else if (x < 0 && y < 0) {
//     console.log(`in 3rd quadrant`);
//   } else if (x > 0 && y < 0) {
//     console.log(`in 4th quadrant`);
//   } else {
//   }
// }

// quadrant(0, 0);
// quadrant(0, 2);
// quadrant(2, 0);
// quadrant(6, 18);
// quadrant(-6, 10);
// quadrant(-2, -10);
// quadrant(2, -10);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

// function validTri(a, b, c) {
//     if (a + b <= c || a + c <= b || b + c <= a) {
//         console.log(`invalid triangle`)
//     } else if (a == b && a == c && b == c) {
//         console.log(`equilateral triangle`);
//     } else if ((a != b && a != c && b != c)) {
//         console.log(`scalene triangle`);
//     } else {
//         console.log(`isoceles triangle`);
//     }
// }

// validTri(1,1,2);
// validTri(2,2,2);
// validTri(6,5,4);
// validTri(1,2,2);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataPlan(planLimit, day, usage) {
    let daysLeft = 30 - day;
    let dailyAverage = (usage / day).toFixed(2);
    let dailyAllotment = (planLimit / 30).toFixed(2);
    let exceedAmt = ((dailyAverage * 30) - planLimit).toFixed(2);
    let newPace = ((planLimit - usage) / daysLeft).toFixed(2);
    let pace = ``;
    if (dailyAverage >= dailyAllotment) {
        pace = `EXCEEDING`;
    }else {
        pace = `NOT EXCEEDING`;
    }

    console.log(`${day} days are used. ${daysLeft} days are remaining`);
    console.log(`Average daily use: ${dailyAverage} GB/day`);
    console.log(`You are ${pace} your average daily use of (${dailyAllotment} GB/day).`);
    
    if (pace == `EXCEEDING`) {
    console.log(`Continuing this usage, you'll exceed your data plan by ${exceedAmt} GB.`);
    console.log(`To stay below your data plan, use no more than ${newPace} GB/day`);
    }
    

}

dataPlan(100, 15, 56);
dataPlan(100, 15, 40);
