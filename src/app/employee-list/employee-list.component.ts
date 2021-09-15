import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  headElements = ['S.no', 'Name', 'Email', 'Salary', 'Mobile'];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList() {
    this.employeeService.getAllEmployee().subscribe(data => {
      this.employees = data;
      console.log(data);
    })
  }

  goToEmployeeDetail(id: number) {
    this.router.navigate(['employeeDetail', id]);
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(res => {
      console.log(res);
    })
    this.getEmployeeList();
  }
}
