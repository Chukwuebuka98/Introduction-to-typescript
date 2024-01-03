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