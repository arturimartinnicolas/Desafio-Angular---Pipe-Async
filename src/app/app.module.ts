import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursoService } from './services/curso.service';
import { CursosComponent } from './components/cursos/cursos.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { EstudianteService } from './services/estudiante.service';
import { config, token } from './config';



@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    EstudiantesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    { provide: token, useValue: config}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
