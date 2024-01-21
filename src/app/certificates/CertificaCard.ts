// Blog Card
export class CertificaCard {
    // Field
    id: number; // certifika no 
    img: string;
    title: string; // djangı udemy...
    fields: string; // frontend,backend

    // constructor
    constructor(
        id: number,
        img:string,
        title: string,
        fields: string
    ) {
        this.id = id;
        this.img = img;
        this.title = title;
        this.fields = fields;
    }
}  