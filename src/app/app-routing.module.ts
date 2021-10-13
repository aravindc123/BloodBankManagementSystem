import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddCampComponent } from './add-camp/add-camp.component';
import { AddNotificationComponent } from './add-notification/add-notification.component';
import { AdminComponent } from './admin/admin.component';
import { BloodBankComponent } from './blood-bank/blood-bank.component';
import { BloodStocksComponent } from './blood-stocks/blood-stocks.component';
import { DonorProfileComponent } from './donor-profile/donor-profile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageBloodBanksComponent } from './manage-blood-banks/manage-blood-banks.component';
import { ManageDonorsComponent } from './manage-donors/manage-donors.component';
import { RegisterComponent } from './register/register.component';
import { SearchBloodBanksComponent } from './search-blood-banks/search-blood-banks.component';
import { SearchDonorsComponent } from './search-donors/search-donors.component';
import { AuthGuard } from './_helpers/auth.guard';
import { LoginGuard } from './_helpers/login.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Login' , component : LoginComponent,canActivate : [LoginGuard]},
  {path:'admin',component : AdminComponent ,canActivate : [AuthGuard],data : {role:'Admin'},children:[
    {path : '',component : ManageDonorsComponent},
    {path : 'ManageBloodBanks',component : ManageBloodBanksComponent},
    {path : 'AddNotification',component : AddNotificationComponent}
  ]},
  {path : 'BloodBank',component : BloodBankComponent,canActivate : [AuthGuard],data : {role:'BloodBank'},children : [
    {path : '',component : BloodStocksComponent},
    {path : 'AddCamp',component : AddCampComponent}
  ]},
  {path : 'SearchDonors',component : SearchDonorsComponent},
  {path : 'SearchBloodBank',component : SearchBloodBanksComponent},
  { path : 'Register', component : RegisterComponent },
  {path : 'DonorProfile',component : DonorProfileComponent},
  {path : 'AboutUs',component : AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
