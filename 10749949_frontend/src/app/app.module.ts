import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { OfferComponent } from './pages/offer/offer.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShowregisterComponent } from './pages/showregister/showregister.component';
import { ShowfeedbackComponent } from './pages/showfeedback/showfeedback.component';
import { AddofferComponent } from './pages/addoffer/addoffer.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { ServeComponent } from './pages/serve/serve.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { ShowserveComponent } from './pages/showserve/showserve.component';
import { PriceComponent } from './pages/price/price.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ChatComponent } from './pages/chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    ContactusComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    OfferComponent,
    RegisterComponent,
    ShowregisterComponent,
    ShowfeedbackComponent,
    AddofferComponent,
    HomeAdminComponent,
    ServeComponent,
    LoginAdminComponent,
    ShowserveComponent,
    PriceComponent,
    WelcomeComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
