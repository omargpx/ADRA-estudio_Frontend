import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Home/landing-page/landing-page.component';
import { ModalComponent } from './Home/modal/modal.component';
import {NgbModal, ModalDismissReasons, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PortaSociaComponent } from './Socia/porta-socia/porta-socia.component';
import { CapacitacionesComponent } from './Socia/capacitaciones/capacitaciones.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Home/login/login.component';
import { DashboardComponent } from './Home/dashboard/dashboard.component'
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ModalComponent,
    PortaSociaComponent,
    CapacitacionesComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
