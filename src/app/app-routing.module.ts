import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
    {path : '' , component : EmployeeListComponent},
    {path : 'employeeList' , component : EmployeeListComponent},
    {path : 'employeeDetail/:id' , component : EmployeeDetailComponent},
    {path : 'updateEmployee/:id' , component : UpdateEmployeeComponent},
    {path : 'createEmployee' , component : CreateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
