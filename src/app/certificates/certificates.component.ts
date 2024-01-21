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
        img: '../imgs/javascript.jpg',
        title: "Udemy Javascript",
        fields: "Frontend"
      },
      {
        id: 2,
        img: '../imgs/Django.jpg',
        title: "Udemy Python Django",
        fields: "Backend"
      },
      {
        id: 3,
        img: '../imgs/git.png',
        title: "BTK Akademi Git/Githun",
        fields: "Source Control"
      }
    ]
}
