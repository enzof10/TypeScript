interface Person {
    id: number;
    name: string;
}

interface Employee extends Person {
    dpto? : string
}

interface Customer extends Person{
    country : string
}


const employee : Employee = {
    id :1,
    name: "uno"
}

const customer : Customer = {
    id :1,
    name: "uno",
    country :"uuna country"
}


interface Animal {
    name: string
    getDogs: () => void
    getCats?: () => void
}

class Zoo implements Animal {
    name = "Muhh";
    getDogs (): string{
        // logica aca
        return "algo"
    };
}