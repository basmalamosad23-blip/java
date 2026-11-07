 // Question 1
let num = Number (prompt ('Enter  Number'));
for ( let i= 1; i<=10;i++){
    console.log (`${num} *${i} =${num*i}`);
}

// Question 2
{ 
    for (let i = 1; i <= 50; i++) {
        if (i % 5 == 0) {
            console.log(i);
        }
    }
}

// Question 3
{
    let i = 1;

    while (i <= 50) {
        if (i % 2 == 0) {
            console.log(i);
        }
        i++;
    }
}

// Question 4
{
    let i = 10;

    do {
        console.log(i);
        i--;
    } while (i >= 1);

    console.log("Lift off!");
}

// Question 5
{
    const greet = (name) => {
        return "Hello, " + name + "!";
    };

    console.log(greet("Basma"));
}

// Question 6
{
    let num = Math.floor(Math.random() * 10) + 1;

    console.log(num);
}

// Question 7
{
    let scores = [90, 70, 85, 60, 95];

    let highest = Math.max(...scores);
    let lowest = Math.min(...scores);

    console.log("Highest score: " + highest);
    console.log("Lowest score: " + lowest);
}

// Question 8
{
    let temp = -4.7;

    console.log(Math.abs(temp));
    console.log(Math.ceil(temp));
    console.log(Math.floor(temp));
    console.log(Math.round(temp));
}

// Question 9
{
    let fullName = prompt("Enter your full name");

    let cleanName = fullName.trim();

    console.log(cleanName.length);
    console.log(cleanName.toUpperCase());
    console.log(cleanName.toLowerCase());
    console.log(cleanName.indexOf(" "));

    let firstName = cleanName.split(" ")[0];

    console.log(firstName);
}

// Question 10
{
    let names = ["Ahmed", "Basma", "Sara", "Mohamed"];

    let randomIndex = Math.floor(Math.random() * names.length);

    let randomName = names[randomIndex];

    console.log(randomName);
}

// Question 11
{
    let employees = [
        { name: "Ahmed", age: 25, salary: 5000 },
        { name: "Basma", age: 22, salary: 4000 },
        { name: "Sara", age: 28, salary: 6000 }
    ];

    for (let i = 0; i < employees.length; i++) {

        console.log(employees[i].name);
        console.log(employees[i].age);
        console.log(employees[i].salary);

    }
}