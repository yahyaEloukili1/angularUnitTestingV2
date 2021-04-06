import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import { AuthenticationService } from "../../services/authentication.service";
fdescribe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let authService : AuthenticationService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ],
      providers: [AuthenticationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
   authService = TestBed.inject(AuthenticationService)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
 
    expect(component).toBeTruthy();
  
  });
  

  it('getSlarySlip should return the value "Salary Slip"', () => {
    spyOn(authService,'checkAuthentication').and.returnValue(true)
    let salSlip = component.getSlarySlip();
    expect(salSlip).toEqual('Salary Slip')
    expect(authService.checkAuthentication).toHaveBeenCalled();
  });

});
