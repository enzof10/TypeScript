// class 
class PersonClass {

    public zone = "Caribean"
    protected city = "Santo domingo";
    private country = "R:D";
    constructor() { }


    greet(): void {
        this.city
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
    constructor(private readonly id: number, private name: string, private depart: string) {
        // this.id = id;
        // this.name = name;
        // this.depart = depart;
        super();
        this.showInfo()
    }

    showInfo(): void {

        console.log(`nombre: ${this.name}, depart:  ${this.depart}, zone : ${this.zone}`);
    }
}

const emp = new EmployeeClass(1, "nombreee", "dptoooo")

emp.greet()