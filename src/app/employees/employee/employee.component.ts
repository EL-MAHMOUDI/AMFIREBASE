import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  genders: string[] = ['Male', 'Female', 'Other'];
  departments: string[] = ['IT', 'AI', 'DevOps'];

  constructor(private service: EmployeeService,
    private notificationService: NotificationService,
    private dialogRef: MatDialogRef<EmployeeComponent>) { }

  ngOnInit() {
    this.service.getEmployees();
  }

  onSubmit(){
    console.log(this.service.form.value);
    this.service.insertEmployee(this.service.form.value);
    this.notificationService.success('Successfully added');
    this.onClear();
    this.dialogRef.close();
  }

  onClear(){
    this.service.form.reset();
  }

  onCancel(){
    this.dialogRef.close();
  }
}
