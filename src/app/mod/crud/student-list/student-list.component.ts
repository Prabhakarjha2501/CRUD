import { Component } from '@angular/core';
import { catchError, debounceTime, Subject, switchMap } from 'rxjs';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
   sList:Employee[];

   id:number =0;
  constructor(private es:EmployeeService){
  }
   ngOnInit(){
       this.es.getAll().subscribe(
         (data : Employee[])=>{
          this.sList = data;
         }
       );
   }
        updateEmpl (st :Employee){
          this.es.s = Object.assign(st ,{});
        }
     
        deleteEmp(st :Employee){
          this.es.delete(st).subscribe();
          window.location.reload();
        }

       searchById(){
        this.es.findById(this.id).subscribe(
        (stu: Employee) =>{
          this.es.s = Object.assign(stu,{});
        }
      )
       } 
  }















// import { Component, OnInit } from '@angular/core';
// import { catchError, debounceTime, Subject, switchMap } from 'rxjs';
// import { Employee } from 'src/app/model/employee';
// import { EmployeeService } from 'src/app/shared/employee.service';

// @Component({
//   selector: 'app-student-list',
//   templateUrl: './student-list.component.html',
//   styleUrls: ['./student-list.component.css']
// })
// export class StudentListComponent implements OnInit {
//    sList:Employee[];
//    errorMessage: string = '';
//   constructor(private es:EmployeeService){
//   }
//    ngOnInit(){
//           this.es.getAll().subscribe((data)=>{
//        this.sList= data;
//      },
//      (error) =>{
//        console.error(`Failed to fetch employee data${error}`)
//      }
//    );
//    }
//   }
