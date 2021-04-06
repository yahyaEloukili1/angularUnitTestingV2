import { CustomerReservation } from "./customerReservation";
describe('Customer reservation',()=>{
    it('testing',()=>{
    //Arrange
    let custReserve = new CustomerReservation();
    //act
    let isReserved = custReserve.reserveRoom();
    //assert
    expect(isReserved).toBeTruthy();
    })


})