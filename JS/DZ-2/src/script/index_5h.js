"use strict";

let worker = {
    FirstName: "John",
    SecondName: "Dou",
    Salary: 3000, //$
    Experience: 10, //years
    FullName: function () {
        console.log(`${this.FirstName} ${this.SecondName}`);
    },
    FullSalary: function () {
        let res = this.Salary;
        if (this.Experience > 8) {
            res *= 1.1;
        } else {
            if (this.Experience > 5) {
                res *= 1.05;
            }
        }
        return res;
    },
};

console.log(worker);
worker.FullName();
console.log(worker.FullSalary());

worker.Experience = 6;
console.log(worker.FullSalary());

worker.Experience = 4;
console.log(worker.FullSalary());
