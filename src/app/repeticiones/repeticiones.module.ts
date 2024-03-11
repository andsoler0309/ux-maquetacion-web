import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepeticionesListaComponent } from './repeticiones-lista/repeticiones-lista.component';
import { NavBarAppModule } from '../nav-bar-app/nav-bar-app.module';
import { RepeticionesCrearComponent } from './repeticiones-crear/repeticiones-crear.component';
import { FormsModule } from '@angular/forms';
import { CalendarComponent } from '../calendar/calendar.component';
import { RepeticionesEditarComponent } from './repeticiones-editar/repeticiones-editar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NavBarAppModule
  ],
  declarations: [
    RepeticionesListaComponent,
    RepeticionesCrearComponent,
    CalendarComponent,
    RepeticionesEditarComponent
  ]
})
export class RepeticionesModule { }
