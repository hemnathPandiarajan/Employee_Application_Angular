import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  id : number;
  employee : Employee; 
  updateEmployeeForm;
  response;

  constructor(
    private router : ActivatedRoute,
    private route : Router,
    private employeeService : EmployeeService
  ) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
      this.updateEmployeeForm = new FormGroup({ 
        name : new FormControl(this.employee.name),
        email : new FormControl(this.employee.email),
        salary : new FormControl(this.employee.salary),
        mobile : new FormControl(this.employee.mobile)
    })
    })
  }



  onSubmit(){
    console.log(this.updateEmployeeForm.value);
    this.employeeService.updateEmployee(this.updateEmployeeForm.value,this.id).subscribe( data => {
      this.response = data;
      console.log(this.response);
      if(this.response.status === 'Successfully inserted'){
        this.route.navigate(['employeeList']);
      }
    })
  }

}
