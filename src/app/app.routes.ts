import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { EducationComponent } from './education/education.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    // {path:'index', component: AboutComponent},
    // {path:'',redirectTo:"index", pathMatch:'full'},
    //Blog
    {path:'blog', component: BlogPageComponent},
    //Login
    {path:'login', component: LoginPageComponent},
    //Register
    {path:'register', component: RegisterPageComponent},
    //Education
    {path:'education', component: EducationComponent},
    //Certificates
    {path:'certificates', component: CertificatesComponent},
    //Contact
    {path:'contact', component: ContactComponent}

];
