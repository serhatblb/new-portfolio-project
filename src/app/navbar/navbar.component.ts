import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  navBar: {
    isLogin: boolean;
    // logo: string, (fontAwesome,picture,link,title)
    logo: {
      logoName: string;
      logoFontAwesome: string;
      logoPicture: string;
      logoLink: string;
      logoTitle: string;
    };
    navbar: Array<any>;
  }= {
    isLogin: false,
    logo: {
      logoName: 'Logo',
      logoFontAwesome: 'fa-solid fa-code-branch',
      logoPicture:
        'https://hypercompany.com/assets/images/logo-black.svg',
      logoLink: '/',
      logoTitle: 'Title',
    },
    //Anasayfa,AboutMe,Blog,Contact  name: Anasayfa, link: http://, fontAwesome
    navbar: [
      {
        id: 1,
        name: 'Home',
        link: '/',
        fontAwesome: 'fa-solid fa-house-chimney',
      },
      { id: 2, name: 'about', link: '#about', fontAwesome: 'font-2' },
      { id: 3, name: 'blog', link: '#blog', fontAwesome: 'font-2' },
      { id: 4, name: 'education', link: '##education', fontAwesome: 'font-3' },
      { id: 5, name: 'contact', link: '#contact', fontAwesome: 'font-4' },
    ],
  }; // end navBar Object

  // Constructor
  constructor(){}



  isScrolled: boolean = false;
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }
}