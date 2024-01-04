"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // private name: string;
        this.employees = [];
        // this.name = n;
        console.log(Department.ficalYear);
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.describe = function () {
        console.log("Department (".concat(this.id, "): ").concat(this.name));
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.ficalYear = 2024;
    return Department;
}());
var ItDepartment = /** @class */ (function (_super) {
    __extends(ItDepartment, _super);
    function ItDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admin = admins;
        return _this;
    }
    return ItDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'ACCOUNTING') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "moseRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("No report found.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        set: function (value) {
            if (!value) {
                throw new Error("Enter a value");
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.printReport = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var employee1 = Department.createEmployee("Leroy");
console.log(employee1, Department.ficalYear);
var it = new ItDepartment("d1", ["Max"]);
it.addEmployee("Max");
it.addEmployee("Manu");
// accounting.employees[2] = "Anna"
it.describe();
it.printEmployeeInformation();
console.log(it);
var accounting = new AccountingDepartment("d2", []);
console.log(accounting.mostRecentReport = "RECORD");
accounting.addReport("Not so good report");
console.log(accounting.mostRecentReport);
accounting.printReport();
accounting.addEmployee('Emma');
accounting.addEmployee('Emmanuel');
accounting.addEmployee('Max');
console.log(accounting);
accounting.printEmployeeInformation();
// const accountingCopy = { name: "Dummy", describe: accounting.describe }
// accountingCopy.describe()
