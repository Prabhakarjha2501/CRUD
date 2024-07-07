import { Component } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(public es:EmployeeService){

  }
  saveStu(em:Employee){
  console.log(JSON.stringify(em)+"---------data ");
  if (em.id >0){
   this.es.update(em).subscribe()
  }
  this.es.save(em).subscribe();
  window.location.reload();
}


}
