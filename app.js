console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds (count){
for( i=0; i<=count; i++)
{
 if(i%2==1)
 {
    console.log(i);
 }
}
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(age){

    if (age>= 16)
    {
        console.log("You can drive");
    }
    else 
    {
        console.log("Sorry, but you need to wait until you're 16");
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whichQuadrant (x, y){
     if(x>0 && y>0)
     {
        console.log("Quadrant 1");
     }
     if(x<0 && y>0)
     {
        console.log ("Quadrant 2");
     }
     if (x<0 && y<0)
     {
        console.log ("Quadrant 3");
     }
     if (x>0 && y<0)
     {
        console.log("Quadrant 4");
     }
     else
     {
        console.log ("coordinates not in any quadrant");
     }
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function whichTriangle(x, y, z){
     if (x==y==z)
     {
        console.log("equilateral");
     }
     if(x==y || x==z || y==z)
     {
         console.log ("isosceles");
     }
     if (x!=y!=z)
     {
        console.log("scalene");
     }
     if(x+y!=z|| x+z!=y|| z+y!=x)
     {
        console.log("invalid triangle");
     }
     



}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function howMuchDataLeft(planLimit, day, usage){
let month = 30;     
let dailyAverage= planLimit / day;
let daysLeft = month- day;
let dataLeft = planLimit- usage;
let currentUsageAverage = usage / day;
let suggestedNewAverage = dataLeft/ daysLeft;
let trendingUsage = dailyAverage * month
let exceedingByMonth = trendingUsage- planLimit
let monthlySafeDailyAverage = planLimit / day;
let exceedingbyDay = currentUsageAverage- monthlySafeDailyAverage;

console.log ("${day} days used, ${daysLeft} days remaining")
console.log("Average daily use: ${dailyAverage} GB/day") 
console.log(" You are EXCEEDING your average daily use ${monthlySafeDailyAverage} GB/ day,") 
console.log("continuing this high usage, you'll exceed your data plan by ${exceedingByMonth} GB.")
console.log("To stay below your data plan, use no more than ${suggestedNewAverage} GB/day.")

}




