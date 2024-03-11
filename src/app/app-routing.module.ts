import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from './home/home.component';
import { SonidosListaComponent } from './sonidos/sonidos-lista/sonidos-lista.component';
import { RepeticionesListaComponent } from './repeticiones/repeticiones-lista/repeticiones-lista.component';
import { SonidosCrearComponent } from './sonidos/sonidos-crear/sonidos-crear.component';
import { SonidosEditarComponent } from './sonidos/sonidos-editar/sonidos-editar.component';
import { RepeticionesCrearComponent } from './repeticiones/repeticiones-crear/repeticiones-crear.component';
import { RepeticionesEditarComponent } from './repeticiones/repeticiones-editar/repeticiones-editar.component';

const routes: Routes = [
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'sonidos',  component: SonidosListaComponent, pathMatch: 'full'},
  { path: 'repeticiones', component: RepeticionesListaComponent, pathMatch: 'full'},
  { path: 'sonidos/crear', component: SonidosCrearComponent, pathMatch: 'full'},
  { path: 'sonidos/editar', component: SonidosEditarComponent, pathMatch: 'full'},
  { path: 'repeticiones/crear', component: RepeticionesCrearComponent, pathMatch: 'full'},
  { path: 'repeticiones/editar', component: RepeticionesEditarComponent, pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
