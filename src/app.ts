abstract class Department {
    static ficalYear = 2024;
    // private id: string;
    // private name: string;
    protected employees: string[] = []


    constructor(protected readonly id: string, private name: string) {
        // this.name = n;
        console.log(Department.ficalYear);
    }

    static createEmployee(name: string) {
        return { name: name }
    }

    abstract describe(this: Department): void;

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

    describe() {
        console.log("IT Department ID: " + this.id)
    }

}

class AccountingDepartment extends Department {
    private lastReport: string;

    get moseRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found.")
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error("Enter a value")
        }
        this.addReport(value);
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'ACCOUNTING');
        this.lastReport = reports[0]
    }

    describe() {
        console.log("Accounting Department " + this.id)
    }

    addEmployee(name: string) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text
    }

    printReport() {
        console.log(this.reports)
    }
}

const employee1 = Department.createEmployee("Leroy")
console.log(employee1, Department.ficalYear)

const it = new ItDepartment("d1", ["Max"]);

it.addEmployee("Max")
it.addEmployee("Manu")

// accounting.employees[2] = "Anna"

it.describe()
it.printEmployeeInformation()

console.log(it)

const accounting = new AccountingDepartment("d2", [])

console.log(accounting.mostRecentReport = "RECORD")
accounting.addReport("Not so good report")

console.log(accounting.mostRecentReport)

accounting.printReport()

accounting.addEmployee('Emma')
accounting.addEmployee('Emmanuel')
accounting.addEmployee('Max')

console.log(accounting)

accounting.printEmployeeInformation()
// const accountingCopy = { name: "Dummy", describe: accounting.describe }

// accountingCopy.describe()