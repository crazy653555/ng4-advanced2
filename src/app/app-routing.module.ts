import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { fallbackRoute } from '../fallback-route';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cards/:type', component: CardsComponent },
      {
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule'
      }
    ]
  },
  {path:'login',component:LoginComponent},
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      enableTracing: false,
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
