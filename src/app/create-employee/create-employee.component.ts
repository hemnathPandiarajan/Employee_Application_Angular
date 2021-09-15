import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  response;
  constructor(
    private employeeService : EmployeeService
  ) { }

  ngOnInit(): void {
  }

  empForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    salary: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),

  })

  addEmp(){
    console.log(this.empForm.value);
    this.employeeService.createEmployee(this.empForm.value).subscribe(
      response => { this.response = response }
    )
    console.log(this.response);
    this.empForm.reset();
  }

}
