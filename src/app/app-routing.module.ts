import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevocionMatutinaComponent } from './Administrador/devocion-matutina/devocion-matutina.component';
import { GestionCapacitacionesComponent } from './Administrador/gestion-capacitaciones/gestion-capacitaciones.component';
import { GestionUsuariosComponent } from './Administrador/gestion-usuarios/gestion-usuarios.component';
import { PortalAdministradorComponent } from './Administrador/portal-administrador/portal-administrador.component';
import { PortalAsesorComponent } from './Asesor/portal-asesor/portal-asesor.component';
import { DashboardComponent } from './Home/dashboard/dashboard.component';
import { LandingPageComponent } from './Home/landing-page/landing-page.component';
import { LoginComponent } from './Home/login/login.component';
import { AsesoriaComponent } from './Socia/asesoria/asesoria.component';
import { CapacitacionesComponent } from './Socia/capacitaciones/capacitaciones.component';
import { PortaSociaComponent } from './Socia/porta-socia/porta-socia.component';
import { SesionesComponent } from './Socia/sesiones/sesiones.component';

const routes: Routes = [
  {path:'portal-socia',component:PortaSociaComponent},
  {path:'landingPage',component: LandingPageComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'capacitacion',component:CapacitacionesComponent},
  {path:'login',component:LoginComponent},
  {path:'sesion',component:SesionesComponent},
  {path:'asesoria',component:AsesoriaComponent},
  {path:'portal-administrador',component:PortalAdministradorComponent},
  {path:'portal-asesor',component:PortalAsesorComponent},
  {path:'devocion-matutina',component:DevocionMatutinaComponent},
  {path:'gestionUsuarios',component:GestionUsuariosComponent},
  {path:'gestionCapacitaciones',component:GestionCapacitacionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
