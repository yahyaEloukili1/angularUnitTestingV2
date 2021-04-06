import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import { AuthenticationService } from "../../services/authentication.service";
fdescribe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let authService : AuthenticationService;
  let h1 :HTMLElement
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
    h1 = fixture.nativeElement.querySelector('h1');
    fixture.detectChanges();
  });

  it('should create', () => {
 
    expect(component).toBeTruthy();
  
  });
  

  it('getSlarySlip should return the value "Salary Slip"', () => {
      component.getSalarySlip();
      fixture.detectChanges();
      expect(h1.textContent).toBe(component.salSlip);
  });

});
