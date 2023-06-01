class Employee {
    constructor(fName, lName, baseSalary, experience) {
        this.fName = fName;
        this.lName = lName;
        this.baseSalary = baseSalary;
        this.experience = experience;
    }

    countedSalary() {
        let salary = this.baseSalary;
        if (this.experience > 2) {
            salary += 200;
            if (this.experience > 5) {
                salary = this.baseSalary * 1.2 + 500;
            }
        }
        return salary;
    }
}

class Developer extends Employee {

}

class Designer extends Employee {
    constructor(fName, lName, baseSalary, experience, Coeff) {
        super(fName, lName, baseSalary, experience);
        this.Coeff = Coeff;
    }

    countedSalary() {
        return super.countedSalary() * this.Coeff;
    }
}

class Manager extends Employee {
    constructor(fName, lName, baseSalary, experience, team) {
        super(fName, lName, baseSalary, experience);
        this.team = team;
    }

    countedSalary() {
        let salary = super.countedSalary();
        if (this.team.length > 5) {
            salary += 200;
            if (this.team.length > 10) {
                salary += 300;
            }
        }

        const developersCount = this.team.filter((employee) => employee instanceof Developer).length;
        if (developersCount > this.team.length / 2) {
            salary *= 1.1;
        }

        return salary;
    }
}

class Department {
    constructor(managers) {
        this.managers = managers;
    }


    giveSalary() {
        this.managers.forEach((manager) => {
            manager.team.forEach((employee) => {
                const salary = employee.countedSalary();
                console.log(`${employee.fName} ${employee.lName} отримав ${salary} грошей.`);
            });
        });
    }
}

const developer1 = new Developer("Valeriy", "Ivanov", 2000, 3);
const developer2 = new Developer("Ivan", "Volodymyrovich", 2500, 6);
const designer1 = new Designer("Volodymyr", "Oleksandov", 1800, 4, 0.8);
const designer2 = new Designer("Olexandr", "Stepanov", 2200, 7, 0.9);
const manager1 = new Manager("Stepan", "Mykolatovich", 3000, 8, [developer1, designer1]);
const manager2 = new Manager("Mykolay", "Valeriyovich", 3500, 10, [developer2, designer2]);

const department = new Department([manager1, manager2]);

department.giveSalary();