import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import { EnsureloginGuard } from './ensurelogin.guard';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardsComponent,
    LayoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LoginGuard, EnsureloginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
