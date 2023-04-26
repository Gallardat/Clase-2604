import { Component, OnInit } from '@angular/core';
import { Alumno } from '../_interface/Alumno';
import { FormControl, FormControlName, FormGroup, } from '@angular/forms';
import { Observable ,of, Subject} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioListaService } from '../servicio-lista.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  id: number=0;
  formulario: FormGroup;

  alumno: Alumno[]=[]

  constructor(private ruta: Router,private activarRota: ActivatedRoute, private miservicio: ServicioListaService){

  }
  ngOnInit(): void {

     this.activarRota.params.subscribe(info=>
      { this.id=this.activarRota.snapshot.params['id']
        this.miservicio.buscarAlumno(info['id']).subscribe(info2=>{
          this.formulario= new FormGroup({
              id: new FormControl(info2.id),
              dni: new FormControl(info2.dni),
              nombre: new FormControl(info2.nombre),
              horas: new FormControl(info2.horas)

             })
          }
            )
        })

  }


aceptarI(){
  {
    if(this.id==undefined)
    {
      let nuevo={id:this.miservicio.contador++,dni:this.formulario.value['dni'],nombre:this.formulario.value['nombre'],horas:this.formulario.value['horas']}
      this.miservicio.agregar(nuevo)
      this.ruta.navigate([""])
    }
    else
    {
      this.miservicio.modificar({id:this.miservicio.contador++,dni:this.formulario.value['dni'],nombre:this.formulario.value['nombre'],horas:this.formulario.value['horas']})
      this.ruta.navigate([""])

    }

  }


}

}
