import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './mod/crud/register/register.component';
import { StudentListComponent } from './mod/crud/student-list/student-list.component';
import { EmployeeService } from './shared/employee.service';
import { FormsModule } from '@angular/forms';
import { CrudModule } from './mod/crud/crud.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CrudModule,
    HttpClientModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
