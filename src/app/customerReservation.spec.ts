import { CustomerReservation } from "./customerReservation";
describe('Customer reservation',()=>{
    let custService : CustomerReservation
    beforeEach(()=>{
      custService = new CustomerReservation() 
    })
    afterEach(()=>{
        custService = null
    })
    it('should register customer / increase current customer count by 1',()=>{
   
        let custCount = custService.registerCustomer();
        expect(custCount).toEqual(11);
    })
    it('should un-register customer / dencrease current customer count by 1',()=>{
   
        let custCount = custService.unregisterCustomer(); 
        expect(custCount).toEqual(9);
    })
})