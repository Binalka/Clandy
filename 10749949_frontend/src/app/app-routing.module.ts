import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
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


const routes: Routes = [
  {path : "feedback", component:FeedbackComponent},
  {path : "contactus", component:ContactusComponent},
  {path : "home", component:HomeComponent},
  {path : "login", component:LoginComponent},
  {path : "logout", component:LogoutComponent},
  {path : "offer", component:OfferComponent},
  {path : "register", component:RegisterComponent},
  {path : "showregister", component:ShowregisterComponent},
  {path : "showfeedback", component:ShowfeedbackComponent},
  {path : "addoffer", component:AddofferComponent},
  {path : "homeAdmin", component:HomeAdminComponent},
  {path : "serve", component:ServeComponent},
  {path : "loginAdmin", component:LoginAdminComponent},
  {path : "showserve", component:ShowserveComponent},
  {path : "price", component:PriceComponent},
  {path : "loginAdmin", component:LoginAdminComponent},
  {path : "", component:WelcomeComponent},
  {path : "chat", component:ChatComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
