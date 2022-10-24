import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Estudiante } from '../models/estudiante';


@Injectable({
  providedIn: 'root'
})
export class EstudianteService { 
  estudiantes: Estudiante[] =  
  [
    {nombre: 'Pablo', apellido:'Perez', edad:'31', fechaDeNacimiento: new Date(4, 11, 1991), email: 'pabloperez@yahoo.com'},
    {nombre: 'Martin', apellido:'Garcia', edad:'20', fechaDeNacimiento: new Date(4, 11, 1991), email: 'martingarcia@yahoo.com'},
    {nombre: 'Lucas', apellido:'Rodriguez', edad:'25', fechaDeNacimiento: new Date(4, 11, 1991), email: 'lucasr@yahoo.com'},
    {nombre: 'Juan', apellido:'Gonzalez', edad:'22', fechaDeNacimiento: new Date(4, 11, 1991), email: 'juangonzalez@yahoo.com'}
  ];
 
 

  constructor() {
 
   }

  obtenerEstudiantesObservable(){
    return of(this.estudiantes);
  }
  
}
