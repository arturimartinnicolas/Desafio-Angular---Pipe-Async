import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  cursos: Curso[] =   [{
    nombre: 'Angular',
    comision: '32310',
    profesor: 'Keven',
    fechaInicio: new Date(2022, 0, 1),
    fechaFin: new Date(2022, 1, 28),
    inscripcionAbierta: true,
    imagen: 'https://parentesis.com/imagesPosts/coder00.jpg',
    estudiantes: [{nombre: 'Pablo', apellido:'Perez', edad:'31', fechaDeNacimiento: new Date(4, 11, 1991), email: 'pabloperez@yahoo.com'}]
  },
  {
    nombre: 'Angular',
    comision: '32320',
    profesor: 'Fernando',
    fechaInicio: new Date(2022, 2, 1),
    fechaFin: new Date(2022, 3, 30),
    inscripcionAbierta: true,
    imagen: 'https://parentesis.com/imagesPosts/coder00.jpg',
    estudiantes: [{nombre: 'Martin', apellido:'Garcia', edad:'20', fechaDeNacimiento: new Date(4, 11, 1991), email: 'martingarcia@yahoo.com'}]
  },
  {
    nombre: 'ReactJS',
    comision: '33310',
    profesor: 'Arturo',
    fechaInicio: new Date(2022, 1, 1),
    fechaFin: new Date(2022, 3, 28),
    inscripcionAbierta: false,
    imagen: 'https://parentesis.com/imagesPosts/coder00.jpg',
    estudiantes: [{nombre: 'Lucas', apellido:'Rodriguez', edad:'25', fechaDeNacimiento: new Date(4, 11, 1991), email: 'lucasr@yahoo.com'}]
  },
  {
    nombre: 'VueJS',
    comision: '34310',
    profesor: 'Lautaro',
    fechaInicio: new Date(2022, 5, 1),
    fechaFin: new Date(2022, 6, 30),
    inscripcionAbierta: false,
    imagen: 'https://parentesis.com/imagesPosts/coder00.jpg',
    estudiantes: [{nombre: 'Juan', apellido:'Gonzalez', edad:'22', fechaDeNacimiento: new Date(4, 11, 1991), email: 'juangonzalez@yahoo.com'}]
  }];

  
  constructor() { }

  obtenerCursosPromise(): Promise<Curso[] | any>{
    return new Promise((resolve, reject) => {
      if(this.cursos.length > 0){
        resolve(this.cursos);
      }else{
        reject({
          codigo: 0,
          mensaje: 'No hay cursos disponibles en este momento'
        });
      }
    });
  }

  }



