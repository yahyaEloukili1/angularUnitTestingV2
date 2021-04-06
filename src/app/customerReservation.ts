


export class CustomerReservation {
    hotelRoomCapacity = 30;
    customerCount = 10;

    // registerCustomer(){
    //    return  ++this.customerCount;
        
    // } 
    // unregisterCustomer(){
    //    return  --this.customerCount;
    // }
    reserveRoom(): boolean{
        let roomReserved = false
        if(this.customerCount<this.hotelRoomCapacity){
            this.customerCount++;
            roomReserved = true
        }
        return roomReserved
    }
}