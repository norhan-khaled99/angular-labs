"use strict";
class Person {
    constructor(name, address, phoneNumber, emailAddress) {
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.emailAddress = emailAddress;
    }
    toString() {
        return `Class Name : Person\nName : ${this.name}`;
    }
}
////////////////////////////////////
class student extends Person {
    constructor(name, address, phoneNumber, emailAddress, classStatus) {
        super(name, address, phoneNumber, emailAddress);
        this.classStatus = classStatus;
    }
    toString() {
        return `Student Name : ${this.name}`;
    }
}
student.FRESHMAN = "Freshman";
student.SOPHOMORE = "Sophomore";
student.JUNIOR = "Junior";
student.SENIOR = "Senior";
//////////////////////////////////////////
class Employee extends Person {
    constructor(name, address, phoneNumber, emailAddress, office, salary, dateHired) {
        super(name, address, phoneNumber, emailAddress);
        this.office = office;
        this.salary = salary;
        this.dateHired = dateHired;
    }
    toString() {
        return `Class Name : Employee\nName ${this.name}\nOffice ${this.office}\nSalary ${this.salary}\nDate Hired ${this.dateHired}`;
    }
}
//////////////////////////////////////////
class Faculty extends Employee {
    constructor(name, address, phoneNumber, emailAddress, officeHours, rank, office, salary, dateHired) {
        super(name, address, phoneNumber, emailAddress, office, salary, dateHired);
        this.officeHours = officeHours;
        this.rank = rank;
    }
    toString() {
        return `Class Name Faculty \nName ${this.name}\nOffice Hours ${this.officeHours}\nRank ${this.rank}`;
    }
}
//////////////////////////////////////////////////////////////
class Staff extends Employee {
    constructor(name, address, phoneNumber, emailAddress, officeHours, rank, office, salary, dateHired, title) {
        super(name, address, phoneNumber, emailAddress, office, salary, dateHired);
        this.title = title;
    }
    toString() {
        return `Class Name Staff \nName${this.name}\nt`;
    }
}
