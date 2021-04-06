import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../services/authentication.service";
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  salSlip 
  constructor(private authenticationService: AuthenticationService) {
    
  }
   

  ngOnInit(): void {
    this.authenticationService.authenticate()
  }
  getSalarySlip(){
    if(this.authenticationService.checkAuthentication()){
      this.salSlip =  'Salary Slip';
    }
    this.salSlip =  'Not authenticated';
  }

}
