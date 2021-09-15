import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  id : number;
  employee : Employee;
  headElements = ['Name', 'Email', 'Salary', 'Mobile'];
  constructor(
    private router : ActivatedRoute,
    private employeeService : EmployeeService,
    private route : Router
  ) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe( data => {
      this.employee =  data;
      console.log(data);
      console.log(this.id);
    })
  }

  goToUpdateEmployee(id:number){
      this.route.navigate(['updateEmployee',id]);
  }

}
