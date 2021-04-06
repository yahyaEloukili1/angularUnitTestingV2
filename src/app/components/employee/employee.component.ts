import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../services/authentication.service";
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
    
  }
   

  ngOnInit(): void {
    this.authenticationService.authenticate()
  }
  getSlarySlip(){
    if(this.authenticationService.checkAuthentication()){
      return 'Salary Slip';
    }
    return 'Not authenticated';
  }

}
