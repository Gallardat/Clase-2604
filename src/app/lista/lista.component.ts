import { Component, OnInit } from '@angular/core';
import { ServicioListaService } from '../servicio-lista.service';
import { Alumno } from '../_interface/Alumno';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent{
  id: number;
  dni: string;
  nombre: string;
  horas: number;
  alumno: Alumno[]=[]
// subscribe quita el observable y saca el array, asignando los atributos del array del servicio, al array del
  constructor(private miservicio: ServicioListaService){

    // let cursoN=this.miservicio.buscarAlumno(this.id)
  }
  ngOnInit(): void {
    this.miservicio.mostrarLista().subscribe(info=>{this.alumno=info})
  }
  

}
