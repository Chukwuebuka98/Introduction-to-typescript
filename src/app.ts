class Department {
    // private id: string;
    // private name: string;
    protected employees: string[] = []


    constructor(private readonly id: string, private name: string) {
        // this.name = n;
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

class ItDepartment extends Department {
    admin: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admin = admins
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'ACCOUNTING');
    }

    addEmployee(name: string) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    printReport() {
        console.log(this.reports)
    }
}

const it = new ItDepartment("d1", ["Max"]);

it.addEmployee("Max")
it.addEmployee("Manu")

// accounting.employees[2] = "Anna"

it.describe()
it.printEmployeeInformation()

console.log(it)

const accounting = new AccountingDepartment("d2", [])

accounting.addReport("Not so good report")

accounting.printReport()

accounting.addEmployee('Emma')
accounting.addEmployee('Emmanuel')
accounting.addEmployee('Max')

console.log(accounting)

accounting.printEmployeeInformation()
// const accountingCopy = { name: "Dummy", describe: accounting.describe }

// accountingCopy.describe()