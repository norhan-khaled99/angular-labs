class Person {
    name: string;
    address: string;
    phoneNumber: string;
    emailAddress: string;

    constructor(name: string, address: string, phoneNumber: string, emailAddress: string) {
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.emailAddress = emailAddress;
    }

    toString():string { 
        return `Class Name : Person\nName : ${this.name}`; 
    } 
}

////////////////////////////////////
class student extends Person{

    static FRESHMAN :string = "Freshman";     
    static SOPHOMORE :string = "Sophomore";  
    static JUNIOR :string = "Junior";   
    static SENIOR :string = "Senior";   

     classStatus :string ;  

     constructor(name: string, address: string, phoneNumber: string, emailAddress: string ,classStatus :string) {  
        super(name,address,phoneNumber,emailAddress);   
        this.classStatus=classStatus ;
     }
     toString():string{ 

         return `Student Name : ${this.name}` ;
         }
         
}
//////////////////////////////////////////
class Employee extends Person { 

    office: string ; 
    salary: number ; 
    dateHired: Date ;  

    constructor(name :string , address :string , phoneNumber :string , emailAddress :string , office :string , salary :number , dateHired :Date ){  

        super(name , address , phoneNumber , emailAddress);  

        this.office= office ;  
        this.salary= salary ;  
        this.dateHired= dateHired ;     

    }     

    toString():string{     

        return `Class Name : Employee\nName ${this.name}\nOffice ${this.office}\nSalary ${this.salary}\nDate Hired ${this.dateHired}`;     

    }  
} 

//////////////////////////////////////////
class Faculty extends Employee{ 
officeHours: number ;
rank: string ;
constructor(name: string , address: string , phoneNumber: string , emailAddress: string , officeHours: number , rank: string,office:string,salary:number,dateHired:Date)
{          
    super(name,address,phoneNumber,emailAddress,office,salary,dateHired); 
    this.officeHours=officeHours;        
    this.rank=rank; 
}
toString():string{
return `Class Name Faculty \nName ${this.name}\nOffice Hours ${this.officeHours}\nRank ${this.rank}`;     
}             
}       

//////////////////////////////////////////////////////////////

class Staff extends Employee
{   
title: String;
constructor(name: string , address: string , phoneNumber: string , emailAddress: string , officeHours: number , rank: string,office:string,salary:number,dateHired:Date,title:string)
{
super(name,address,phoneNumber,emailAddress,office,salary,dateHired); 
 this .title=title 
}  
toString():string
{     
return `Class Name Staff \nName${this . name}\nt`
}
}








