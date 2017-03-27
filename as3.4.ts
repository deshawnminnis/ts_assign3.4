//Typescript Abstract Class/// 

abstract class Department{
    public name: string;

    constructor (name:string){
       this.name = name;
    }

    printName():void{
        console.log("Department name: " + this.name);
    }

    abstract printMeeting():void;
}

class AccountingDepartment extends Department{

    constructor(){
    super("Accounting and Auditing");

}

    printMeeting():void{
        console.log("The Accounting meeting: ");
}

    generateReports():void{
        console.log("Generating reports: ");
}

}

class FinanceDepartment extends Department{

    constructor(){
    super("Finance Department");
}

    printMeeting():void{
        console.log("The Finance Meeting")
}

    printFinanceRpt():void{
        console.log("Finance Department")
}

}



let department: Department;
department = new AccountingDepartment();
department.printName();
department.printMeeting();
let department2: Department;
department2 = new FinanceDepartment();
department2.printName();
department2.printMeeting();

//department.printFinanceRpt();