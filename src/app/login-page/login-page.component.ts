// CommonModule
import { CommonModule } from '@angular/common';

// Core 
import { Component } from '@angular/core';

// Router Link
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}
