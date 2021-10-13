import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NotificationCardsComponent } from './notification-cards/notification-cards.component';
import { AdminComponent } from './admin/admin.component';
import { BloodBankComponent } from './blood-bank/blood-bank.component';
import { SearchDonorsComponent } from './search-donors/search-donors.component';
import { SearchBloodBanksComponent } from './search-blood-banks/search-blood-banks.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ManageDonorsComponent } from './manage-donors/manage-donors.component';
import { ManageBloodBanksComponent } from './manage-blood-banks/manage-blood-banks.component';
import { AddNotificationComponent } from './add-notification/add-notification.component';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BloodStocksComponent } from './blood-stocks/blood-stocks.component';
import { AddCampComponent } from './add-camp/add-camp.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DonorProfileComponent } from './donor-profile/donor-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NotificationCardsComponent,
    AdminComponent,
    BloodBankComponent,
    SearchDonorsComponent,
    SearchBloodBanksComponent,
    SidebarComponent,
    ManageDonorsComponent,
    ManageBloodBanksComponent,
    AddNotificationComponent,
    BloodStocksComponent,
    AddCampComponent,
    AboutUsComponent,
    DonorProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
