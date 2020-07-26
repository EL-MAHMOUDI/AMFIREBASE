import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar) { }
  
  config: MatSnackBarConfig = {
    duration: 2000
  }

  success(msg){
    this.config['panelClass']= ['success-notification'];
    this.snackBar.open(msg, '', this.config);
  }
}
