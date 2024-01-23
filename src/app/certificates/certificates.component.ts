import { Component } from '@angular/core';
import { CertificaCard} from './CertificaCard';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss'
})
export class CertificatesComponent {

    certificaCard: CertificaCard[]=[
      {
        id: 1,
        img: '../../assets/imgs/javascript.jpg',
        title: "Udemy Javascript",
        fields: "Frontend"
      },
      {
        id: 2,
        img: '../../assets/imgs/Altogic_Backend.png',
        title: "Altogic Development",
        fields: "Backend"
      },
      
      {
        id: 3,
        img: '../../assets/imgs/Django.jpg',
        title: "Udemy Python Django",
        fields: "Backend"
      },
      
      {
        id: 4,
        img: '../../assets/imgs/git.png',
        title: "BTK Akademi Git/Github",
        fields: "Source Control"
      },
      {
        id: 5,
        img: '../../assets/imgs/Typescript.jpg',
        title: "Udemy TypeScript",
        fields: "Frontend"
      },
      {
        id: 6,
        img: '../../assets/imgs/Cpp.jpg',
        title: "Sıfırdan C++ Programlama",
        fields: "Source Control"
      }
    ]
}
