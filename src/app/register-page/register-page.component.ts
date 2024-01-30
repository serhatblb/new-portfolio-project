// CommonModule
import { CommonModule } from '@angular/common';

// Core
import { Component, OnInit } from '@angular/core';

// Router Link
import { RouterLink } from '@angular/router';

// Alertify
import { AlertifyMessageService } from '../services/alertify-message.service';

// Eğer form ile ilgili çalışma yapacaksak
import { FormsModule, NgForm } from '@angular/forms';
import { UserRegisterService } from '../services/user-register.service';
import { UserRegister } from './UserRegister';
@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent implements OnInit {
  // Field
  // List
  userList: UserRegister[] = new Array<UserRegister>();

  // Create (ngForm)
  userCreate: UserRegister = new UserRegister();

  // Constructor
  constructor(
    private alertifyMessageService: AlertifyMessageService,
    private userRegisterService: UserRegisterService
  ) {}

  // ngOnInit (List)
  ngOnInit(): void {
    // AlertifyMessage
    // this.alertifyMessageService.alertSuccess('Register Sayfasına Hoşgeldiniz');
    
    this.userRegisterService
      .userListRegisterObservable()
      .subscribe((response) => {
        // Observable
        this.userList = response;
        console.log(response);
        //this.alertifyMessageService.alertSuccess(JSON.stringify(response))
      });
    // Observable subscribe
    throw new Error('Method not implemented.');
  }

  // Method
  registerCreate(form: NgForm) {
    // Formdan gelen verileri göstermek
    const formData =
      form.value.username + ' ' + form.value.email + ' ' + form.value.password;
    this.alertifyMessageService.alertSuccess(formData);
    this.userCreate.id=Number( Math.ceil(Math.random()*10000+1));
    this.userCreate.created_date=String(new Date());
    this.alertifyMessageService.alertSuccess(String(this.userCreate.id));

    // Service subscribe
    this.userRegisterService
      .createUserRegisterObservable(this.userCreate)
      .subscribe((response) => {
        this.alertifyMessageService.alertSuccess(form + ' Eklendi');
        form.reset();
      });
  } //end registerCreate

} //end OnePageRegisterComponent

