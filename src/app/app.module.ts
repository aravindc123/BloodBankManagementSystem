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
    AddNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
