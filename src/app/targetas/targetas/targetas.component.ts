import { Component, OnInit } from '@angular/core';
import { SalasService } from 'src/app/services/salas.service';
import { faPlus, faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-targetas',
  templateUrl: './targetas.component.html',
  styleUrls: ['./targetas.component.scss']
})
export class TargetasComponent implements OnInit {

  salas: any[] = [];
  cantidadSalas: any;
  faPlus = faPlus;
  faMinusSquare = faMinusSquare;

  constructor(private salasService: SalasService,
              private usuariosService: UsuariosService,
              private router:Router            
  ) { 
    this.obtenerSalas();
  }

  ngOnInit(): void {
  }
  
  obtenerSalas() {
    this.salasService.obtenerListado()
      .subscribe( (resp:any) => { 
        this.salas = resp.salas
        this.cantidadSalas = this.salas.length
      })
  }


  agregarSala = async () =>  {
    
    const { value: formValues } = await Swal.fire({
      title: 'Nueva sala',
      html:
      `<input placeholder="Nombre" value="Sala ${this.cantidadSalas}" id="nombre" class="nombre form-control w-75 mx-auto">
       <input placeholder="Precio" id="precio" class="precio form-control w-75 mx-auto mt-2">`,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('nombre')['value'],
          document.getElementById('precio')['value']
        ]
      }
    })
    
     if (formValues) {

       let infoSalas = {
         nombre: formValues[0],
         precio: formValues[1]
       }
       
       this.salasService.agregar(infoSalas)
         .subscribe(resp => {
            this.obtenerSalas()
             console.log(resp)
         })
      
    } 

  }

  agregarUsuario = async (sala) => {


    const { value: formValues } = await Swal.fire({
      title: 'Nueva sala',
      html:
      `
       <input placeholder="Nombre" id="nombre" class="nombre form-control w-100 mx-auto">
       <input placeholder="Telefono" id="telefono" class="telefono form-control w-100 mx-auto mt-2">
       <input placeholder="Correo" id="correo" class="correo form-control w-100 mx-auto mt-2">
       <input placeholder="Cedula" id="cedula" class="cedula form-control w-100 mx-auto mt-2">
       <input placeholder="Usuario_id" disabled readonly value="${sala._id}" id="usuario_id" class="usuario_id form-control w-100 mx-auto mt-2">
       `,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('nombre')['value'],
          document.getElementById('telefono')['value'],
          document.getElementById('correo')['value'],
          document.getElementById('cedula')['value'],
          document.getElementById('usuario_id')['value'],
        ]
      }
    })
    
     if (formValues) {

      let infoUsuario = {
         nombre: formValues[0],
         telefono: formValues[1],
         correo: formValues[2],
         cedula: formValues[3],
         sala_id: formValues[4],
       }
       
       if (formValues) {
        
         this.usuariosService.agregarUsuario(infoUsuario)
           .subscribe(resp => {
             console.log(resp)
           })
  
      }
      
    } 

    this.router.navigateByUrl(`sorteo/ver/${sala._id}`)

  }

  verUsuario(sala) {
    this.router.navigateByUrl(`sorteo/ver/${sala._id}`)
  }

  eliminarUsuario(sala) {
    this.salasService.eliminarSala(sala._id).subscribe(resp => console.log(resp));
    this.obtenerSalas();
  }

}
