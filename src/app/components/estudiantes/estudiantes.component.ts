import { Component, Inject, OnDestroy, OnInit  } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { map, Observable, of } from 'rxjs';
import { Configuracion, token } from 'src/app/config';
import { Curso } from 'src/app/models/curso';
import { Estudiante } from 'src/app/models/estudiante';
import { CursoService } from 'src/app/services/curso.service';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit, OnDestroy {
 
  estudiantes!: Estudiante[];
  estudiantes$: Observable<Estudiante[]>;
  dataSource!: MatTableDataSource<Estudiante>;
  suscripcion: any;


  
  columnas: string[] = ['nombre', 'apellido', 'edad', 'fechaDeNacimiento', 'email', 'acciones'];

 

  constructor(private estudiantesService: EstudianteService) {
    this.suscripcion = estudiantesService.obtenerEstudiantesObservable().subscribe({
      next: (estudiantes: Estudiante[]) => {
        this.estudiantes = estudiantes;
      },
      error: (error) => {
        console.error(error);
      }
    });
    this.estudiantes$ = estudiantesService.obtenerEstudiantesObservable();
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource<Estudiante>(this.estudiantes)

    of(this.estudiantes).pipe(
      map((estudiantes: Estudiante[]) => estudiantes.filter((estudiante: Estudiante) => estudiante.edad > '24'))
      ).subscribe((estudiantes) => {
      console.log('Desde el of: ', estudiantes);
     });

    
  }

}
