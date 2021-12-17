import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Home/landing-page/landing-page.component';
import { PortaSociaComponent } from './Socia/porta-socia/porta-socia.component';
import { CapacitacionesComponent } from './Socia/capacitaciones/capacitaciones.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Home/login/login.component';
import { DashboardComponent } from './Home/dashboard/dashboard.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from './Socia/capacitaciones/popup/popup.component';
import { SesionesComponent } from './Socia/sesiones/sesiones.component';
import { AsesoriaComponent } from './Socia/asesoria/asesoria.component';
import { PortalAsesorComponent } from './Asesor/portal-asesor/portal-asesor.component';
import { PortalAdministradorComponent } from './Administrador/portal-administrador/portal-administrador.component';
import { NavBarComponent } from './Socia/nav-bar/nav-bar.component';
import { MatinalComponent } from './Components/matinal/matinal.component';
import { FooterComponent } from './Components/footer/footer.component';
import { DevocionMatutinaComponent } from './Administrador/devocion-matutina/devocion-matutina.component';
import { NavAdminComponent } from './Administrador/nav-admin/nav-admin.component';
import { GestionUsuariosComponent } from './Administrador/gestion-usuarios/gestion-usuarios.component';
import { NewUserComponent } from './Administrador/gestion-usuarios/new-user/new-user.component';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GestionCapacitacionesComponent } from './Administrador/gestion-capacitaciones/gestion-capacitaciones.component';
import { AddCapComponent } from './Administrador/gestion-capacitaciones/add-cap/add-cap.component';
import { ContentCapacitacionComponent } from './Administrador/gestion-capacitaciones/content-capacitacion/content-capacitacion.component';
import { PoVideoComponent } from './Components/po-video/po-video.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PortaSociaComponent,
    CapacitacionesComponent,
    LoginComponent,
    DashboardComponent,
    PopupComponent,
    SesionesComponent,
    AsesoriaComponent,
    PortalAsesorComponent,
    PortalAdministradorComponent,
    NavBarComponent,
    MatinalComponent,
    FooterComponent,
    DevocionMatutinaComponent,
    NavAdminComponent,
    GestionUsuariosComponent,
    NewUserComponent,
    GestionCapacitacionesComponent,
    AddCapComponent,
    ContentCapacitacionComponent,
    PoVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  entryComponents:[NewUserComponent],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {}
