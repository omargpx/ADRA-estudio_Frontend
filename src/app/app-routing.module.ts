import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Home/dashboard/dashboard.component';
import { LandingPageComponent } from './Home/landing-page/landing-page.component';
import { LoginComponent } from './Home/login/login.component';
import { CapacitacionesComponent } from './Socia/capacitaciones/capacitaciones.component';
import { PortaSociaComponent } from './Socia/porta-socia/porta-socia.component';

const routes: Routes = [
  {path:'portal-socia',component:PortaSociaComponent},
  {path:'landingPage',component: LandingPageComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'capacitacion',component:CapacitacionesComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
