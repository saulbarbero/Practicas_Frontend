import { Component, OnInit } from '@angular/core'
import { Curso } from '../models/curso';

const ListadoCursos : Curso[]=[
  {nombre: 'Compi 2', creditos: '5', area: 'Desarrollo', profesor: 'Batman'},
  {nombre: 'IPC 1', creditos: '6', area: 'Desarrollo', profesor: 'Messi'},
  {nombre: 'Practicas iniciales', creditos: '0', area: 'Sistemas', profesor: 'Quicksilver'},
  {nombre: 'Matematica 1', creditos: '5', area: 'Ciencias', profesor: 'Wolverine'},
  {nombre: 'Deportes', creditos: '10', area: 'Saber', profesor: 'Neymar'}
]
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['nombre', 'creditos', 'area', 'profesor'];
  dataSource = ListadoCursos;
  ngOnInit(): void {
  }

}
