import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

    s:Employee ={
      id:0,
      employee_name:'',
      employee_age:0,
      employee_salary:0,
      profile_image: ""
    }

  constructor(private http :HttpClient) { }

   url:string ='http://localhost:3000/Employee';

      save(st :Employee){
       console.log(`this is employee${st}`);
      return  this.http.post(this.url,st)
      }

      getAll(){
        return this.http.get(this.url);
      }

      update (st :Employee){
        return this.http.put(this.url+"/"+st.id, st);
      }

      delete(st :Employee){
        return this.http.delete(this.url+"/"+st.id);
      }
      findById(id:number){
      return this.http.get(this.url+"/"+id);
      }
  // save (em:Employee):Observable<any>{
  //   console.log(em+"this is servic shared");
  //  return this.http.post("https://dummy.restapiexample.com/api/v1/create",em);
  // }

  // getAll():Observable<Employee[]>{
  //   return this.http.get<Employee[]>("http://dummy.restapiexample.com/api/v1/employees")
  // }
}




