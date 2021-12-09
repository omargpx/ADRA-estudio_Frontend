import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Home/landing-page/landing-page.component';
import {NgbModal, ModalDismissReasons, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from "@angular/forms";
import { PortaSociaComponent } from './Socia/porta-socia/porta-socia.component';
import { CapacitacionesComponent } from './Socia/capacitaciones/capacitaciones.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Home/login/login.component';
import { DashboardComponent } from './Home/dashboard/dashboard.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from './Socia/capacitaciones/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PortaSociaComponent,
    CapacitacionesComponent,
    LoginComponent,
    DashboardComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
