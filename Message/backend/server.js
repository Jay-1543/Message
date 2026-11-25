const express = require("express");
const app = express();
 
const employees = [
    { id: 1, name: "Rahul", role: "Developer", salary: 30000 },
    { id: 2, name: "Priya", role: "Tester", salary: 25000 },
    { id: 3, name: "Kiran", role: "Designer", salary: 35000 },
    { id: 4, name: "Sneha", role: "Developer", salary: 40000 },
    { id: 5, name: "Arjun", role: "Tester", salary: 20000 }
];
 
 
//SEARCH API
app.get("/search/:name", (req, res) => {
 
    const searchName = req.params.name;
 
    const result = employees.filter((emp) =>
        emp.name.toLowerCase() === searchName.toLowerCase()
    );
 
 
    console.log("Search Name:", searchName);
    console.log("Search Result:", result);
 
    res.json(result);
});
 
//Filter employees by salary
app.get("/salary", (req, res) => {
 
    const result = employees.filter((emp) =>
        emp.salary >= 30000
    );
 
    console.log("Salary Above 30000:", result);
 
    res.json(result);
});
 
//Sort employees by salary
app.get("/sort", (req, res) => {
 
    const result = [...employees].sort((a, b) =>
        b.salary - a.salary
    );
 
    console.log("Sorted Employees:", result);
 
    res.json(result);
});
 
 
 
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
 