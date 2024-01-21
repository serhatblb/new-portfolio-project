import { Component } from '@angular/core';
import { SchollCard} from './SchoolCard';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent  {
  
  schollCard: SchollCard[]=[
    {
    img:"#",
    name: "Duzce University",
    year: "2016 - 2021",
    department: "Bachelor Degree of Computer Engineering",
    discription: "My academic journey led me to pursue a Bachelor's Degree in Computer Engineering, a pivotal phase that broadened my understanding of technology's core principles and their real-world applications. Throughout this program, I delved deep into various facets of computer systems, software development, algorithms, and digital design."
    },
    {
      img:"#",
      name: "Istanbul Aydin University ",
      year: "2013-2015",
      department: "Dental Prosthetic Technology Associate Degree Program",
      discription: "This program offers a comprehensive education encompassing the fundamental principles and applications of dental prosthetic technology. Gain practical skills in prosthetic design, laboratory techniques, material selection, and the fabrication of customized prostheses. The knowledge and experiences obtained throughout the program establish a strong foundation for a progressive career within the dental health industry."
      },
      {
        img:"#",
        name: "Sair Abay Konanbay Anatolian High School",
        year: "2009-2013",
        department: "High School Secondary Education",
        discription: "It sharpened my analytical thinking, merging scientific concepts with technological applications for problem-solving. This period not only bolstered my problem-solving skills but also laid a fundamental groundwork in science and engineering, providing a solid base for my future endeavors.", 
        }
  ]
}

