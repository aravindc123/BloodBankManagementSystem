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

export class DonationCamp  {
    BloodBankId? : number; 
    City? : string; 
    EventDate? : Date; 
    EventClosing? : Date; 
    EventTime? : Date; 
    EventId? : number;
    EventName? : string;
}

export class EventRegister{
    RegId? : number; 
    UserName? : string; 
    AadharNumber? : number; 
    Contact? : number; 
    UserId? : number; 
    IsDonated? : number; 
    EventName? : string;
}
