import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from './home/home.component';
import { NavBarAppModule } from './nav-bar-app/nav-bar-app.module';
import { SonidosModule } from './sonidos/sonidos.module';
import { RepeticionesModule } from './repeticiones/repeticiones.module';
import { CalendarComponent } from './calendar/calendar.component';
import { ModalConfirmacionComponent } from './modal-confirmacion/modal-confirmacion.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HomeComponent,
    ModalConfirmacionComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavBarAppModule,
    SonidosModule,
    RepeticionesModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
