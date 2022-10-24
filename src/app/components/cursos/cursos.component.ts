import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos!: Curso[];
  promesa: any;
  
  constructor(
    private cursoService: CursoService
  ) {
    this.promesa = cursoService.obtenerCursosPromise()
      .then((valor: Curso[]) => {
       this.cursos = valor;
     }).catch((error: any) => {
       console.error(error);
     });
  }

  ngOnInit(): void {
  }

}
