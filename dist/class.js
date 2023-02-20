"use strict";
// class 
class PersonClass {
    constructor() {
        this.zone = "Caribean";
        this.city = "Santo domingo";
        this.country = "R:D";
    }
    greet() {
        this.city;
        console.log("Hello!!");
    }
}
class EmployeeClass extends PersonClass {
    // Atributos
    // private id: number;
    // private name: string;
    // private depart: string;
    // Metodos
    // primer metodo llamado 
    constructor(id, name, depart) {
        // this.id = id;
        // this.name = name;
        // this.depart = depart;
        super();
        this.id = id;
        this.name = name;
        this.depart = depart;
        this.showInfo();
    }
    showInfo() {
        console.log(`nombre: ${this.name}, depart:  ${this.depart}, zone : ${this.zone} `);
    }
}
const emp = new EmployeeClass(1, "nombreee", "dptoooo");
emp.greet();
