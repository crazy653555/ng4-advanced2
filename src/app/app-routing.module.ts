import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { fallbackRoute } from '../fallback-route';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { FlotComponent } from './charts/flot/flot.component';
import { RadialComponent } from './charts/radial/radial.component';
import { RickshawComponent } from './charts/rickshaw/rickshaw.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',component:DashboardComponent},
  { path: 'cards',component:CardsComponent},
  { path: 'charts',
  children:[
    {path:'',redirectTo:'flot',pathMatch:'full'},
    {path:'flot',component:FlotComponent},
    {path:'radial',component:RadialComponent},
    {path:'rickshaw',component:RickshawComponent},
  ]},
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      enableTracing: false
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
