import { Injectable } from '@angular/core';
import { Alumno } from './_interface/Alumno';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioListaService  implements Alumno{
  id: number;
  dni: string;
  nombre: string;
  horas: number;
  contador=1

  alumno: Alumno[]=[
  {id:this.contador++,dni:"0118276t",nombre:"Daniela",horas:3},
  {id:this.contador++,dni:"01186576g",nombre:"Alejandra",horas:4},
  {id:this.contador++,dni:"0122476d",nombre:"Carlos",horas:4}
]

buscarAlumno(idN: number):Observable<Alumno>
  {
   let ob=this.alumno.find(data=>data.id==idN)

  return ob!=undefined? of(ob) : of({id:0,dni:'',nombre:'',horas:0})

  }

  mostrarLista():Observable<Alumno[]>
  {
    return of(this.alumno)
  }
agregar(alumnon:Alumno)
{
return this.alumno.push(alumnon)

}
modificar(obj: Alumno)
{
  for(let x=0;x<this.alumno.length;x++)
  {
    if(this.alumno[x].id==obj.id)
    {
      this.alumno[x].id=obj.id
      this.alumno[x].dni=obj.dni
      this.alumno[x].nombre=obj.nombre
      this.alumno[x].horas=obj.horas
    }
  }
}

}
//(this.alumno.find(data=>{data?undefined:} data.id=id))
// for(let x=0;x<this.alumno.length;x++)
// {
//   if(this.alumno[x].id==obj.id)
//   {
//     this.alumno[x].id=obj.id
//     this.alumno[x].dni=obj.dni
//     this.alumno[x].nombre=obj.nombre
//     this.alumno[x].horas=obj.horas
//   }
// }
