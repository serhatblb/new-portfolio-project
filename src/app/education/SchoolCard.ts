// Blog Card
export class SchollCard {
    // Field
    img: string;
    name: string; // djangı udemy...
    year: string;
    department: string; // frontend,backend
    discription: string; //

    // constructor
    constructor(img: string, name: string, year: string, department: string, discription: string){
        this.img = img;
        this.name = name;
        this.year = year;
        this.department = department;
        this.discription = discription;
    }
}
