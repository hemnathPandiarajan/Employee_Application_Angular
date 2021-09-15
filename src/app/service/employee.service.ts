import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../model/employee';
import { catchError } from 'rxjs/internal/operators';

const Url = environment.baseUrl + '/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(
    private http: HttpClient
  ) { }


getAllEmployee():Observable<any>{
return this.http.get<Employee>(Url).pipe(
  catchError(this.handleError)
)
}

getEmployeeById(id:number):Observable<any>{
  return this.http.get(`${Url}/${id}`).pipe(
    catchError(this.handleError)
  )
}

updateEmployee(employee : Employee , id : number){
  return this.http.put(`${Url}/${id}`,employee).pipe(
    catchError(this.handleError)
  )
}

  createEmployee(employee : Employee ){
  return this.http.post(`${Url}/addEmployee`,employee).pipe(
    catchError(this.handleError)
  )
}

deleteEmployee(id: number):Observable<any>{
  return this.http.delete(`${Url}/${id}`).pipe(
    catchError(this.handleError)
  )
}



private handleError(error: HttpErrorResponse): any {
  if (error.error instanceof ErrorEvent) {
    console.error('An error occurred:', error.error.message);
  } else {
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  return throwError(
    'Something bad happened; please try again later.');
}


}
