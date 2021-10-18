export class Donor {
    UserId? : number; 
    UserName? : string; 
    Contact? : number; 
    AadharNumber? : number; 
    BloodGroup? : string; 
    DOB? : Date ;
    City? : string; 
    HealthCondition? : string; 
    IsDonor? : number;
}

export class DonorLoginCredential{
    UserName? : string;
    Password? : string;
}

export class DonationHistory{
    BloodTransactionId? : number; 
    UserId? : number; 
    DonationDate? : Date;
}

export class DonorReg{
    UserId? : number; 
    UserName? : string; 
    Contact? : number; 
    Password? : string;
    AadharNumber? : number; 
    BloodGroup? : string; 
    DOB? : Date ;
    City? : string; 
    HealthCondition? : string; 
    IsDonor? : number;
}
