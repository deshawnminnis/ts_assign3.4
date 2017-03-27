//Typescript Abstract Class/// 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting meeting: ");
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log("Generating reports: ");
    };
    return AccountingDepartment;
}(Department));
var FinanceDepartment = (function (_super) {
    __extends(FinanceDepartment, _super);
    function FinanceDepartment() {
        return _super.call(this, "Finance Department") || this;
    }
    FinanceDepartment.prototype.printMeeting = function () {
        console.log("The Finance Meeting");
    };
    FinanceDepartment.prototype.printFinanceRpt = function () {
        console.log("Finance Department");
    };
    return FinanceDepartment;
}(Department));
var department;
department = new AccountingDepartment();
department.printName();
department.printMeeting();
var department2;
department2 = new FinanceDepartment();
department2.printName();
department2.printMeeting();
//department.printFinanceRpt(); 
