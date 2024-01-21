import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterLink } from '@angular/router';

//Components 

import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { EducationComponent } from './education/education.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      CommonModule, 
      RouterOutlet,
      RouterLink,
      NavbarComponent,
      HeaderComponent,
      AboutComponent,
      BlogComponent,
      EducationComponent,
      CertificatesComponent,
      FooterComponent,
      ContactComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-project';
}
