import { Time } from "@angular/common";

export class Camps {
    BloodBankId? : number; 
    BloodBankName? : string; 
    City? : string; 
    EventDate? : Date; 
    EventClosing? : Date; 
    EventTime? : Date; 
    EventId? : number;
    EventName? : string;
}

export class CampRegister{
    RegId? : number; 
    EventId? : number; 
    UserId? : number; 
    IsDonated? : number; 
}
