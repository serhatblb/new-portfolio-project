import { Injectable } from '@angular/core';

//Alertify
declare let alertify:any;

//
@Injectable({
  providedIn: 'root' // global olması için yazarız
})
export class AlertifyMessageService {

  constructor() { }

  //Success
  alertSuccess(message:string){
    alertify.success(message);
  }

  //Message
  alertMessage(message:string){
    alertify.message(message);
  }

  //Warning
  alertWarning(message:string){
    alertify.warning(message);
  }
  
  //Error
  alertError(message:string){
    alertify.error(message);
  }
  
  //Info
  alertInfo(message:string){
    alertify.info(message);
  }
  
  
  
  
}
