import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[] ;

  constructor(private employeeService: EmployeeService) { 

   
  }

  ngOnInit(): void {
    // this.employees = [
    //   {
    //   "id": 1,
    //   "firstName": "Mahadi",
    //   "lastName": "Hasan",
    //   "emailId": "mahadi@gmail.com"
    //   },
    //   {
    //     "id": 2,
    //     "firstName": "Kamal",
    //     "lastName": "Hossain",
    //     "emailId": "kamal@gmail.com"
    //     }
    // ]

    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data =>{
      this.employees = data;
    })
  }

}
