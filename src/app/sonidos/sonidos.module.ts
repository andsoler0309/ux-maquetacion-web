import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SonidosListaComponent } from './sonidos-lista/sonidos-lista.component';
import { NavBarAppModule } from '../nav-bar-app/nav-bar-app.module';
import { SonidosCrearComponent } from './sonidos-crear/sonidos-crear.component';
import { SonidosEditarComponent } from './sonidos-editar/sonidos-editar.component';

@NgModule({
  imports: [
    CommonModule,
    NavBarAppModule
  ],
  declarations: [
    SonidosListaComponent,
    SonidosCrearComponent,
    SonidosEditarComponent
  ]
})
export class SonidosModule { }
