import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNotificationComponent } from './add-notification/add-notification.component';
import { AdminComponent } from './admin/admin.component';
import { BloodBankComponent } from './blood-bank/blood-bank.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageBloodBanksComponent } from './manage-blood-banks/manage-blood-banks.component';
import { ManageDonorsComponent } from './manage-donors/manage-donors.component';
import { SearchBloodBanksComponent } from './search-blood-banks/search-blood-banks.component';
import { SearchDonorsComponent } from './search-donors/search-donors.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Login' , component : LoginComponent},
  {path:'admin',component : AdminComponent ,children:[
    {path : '',component : ManageDonorsComponent},
    {path : 'ManageBloodBanks',component : ManageBloodBanksComponent},
    {path : 'AddNotification',component : AddNotificationComponent}
  ]},
  {path : 'BloodBank',component : BloodBankComponent},
  {path : 'SearchDonors',component : SearchDonorsComponent},
  {path : 'SearchBloodBank',component : SearchBloodBanksComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
