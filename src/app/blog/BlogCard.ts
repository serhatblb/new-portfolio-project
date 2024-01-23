// Blog Card
export class BlogCard {
  // Field
  id: number;
  header:string;
  title: string;
  text: string;
  description: string;
  img: string;
  author: string;
  date: Date;

  // constructor
  constructor(
    id: number,
    header:string,
    title: string,
    text: string,
    description: string,
    img: string,
    author: string,
    date: Date


  ) {
    this.id = id;
    this.header = header;
    this.title = title;
    this.text = text;
    this.description = description;
    this.img = img;
    this.author = author;
    this.date = date;
  }

}
