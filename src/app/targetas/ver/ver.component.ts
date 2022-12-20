import { Component, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { SalasService } from 'src/app/services/salas.service';
import { UsuariosService } from '../../services/usuarios.service';
import { GanadorService } from '../../services/ganador.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.scss']
})
export class VerComponent implements OnInit {

  usuarios: any[] = [];
  sala: any;

  constructor(private activatedRoute: ActivatedRoute,
              private usuarioService: UsuariosService,
              private salasService: SalasService,
              private ganadorService:GanadorService
  ) {
    let id = this.activatedRoute.snapshot.params['id'];
    this.usuarioService.obtenerUsuarios(id).subscribe((resp: any) => {
      this.usuarios = resp.usuario;
    });
    
    this.salasService.obtenerSalaId(id).subscribe((resp: any) => {
      this.sala = resp.sala;
    })

  }

  ngOnInit(): void {}

  sortear() {
    let maximo = this.usuarios.length;
    let ganador
    
    if (maximo > 0) {
      ganador = Math.round(Math.random() * (maximo - 0) + 0);
    } else {
      ganador = 1
    }

    let infoGanador = {
     sala: this.sala,
     usuario: this.usuarios[ganador]
    }
    
    this.ganadorService.agregarSala(infoGanador).subscribe((resp:any)=>{console.log(resp)})

    console.log(infoGanador)

    this.mostrarGanador(infoGanador);
    
  }

  mostrarGanador(infoGanador) {
    Swal.fire({
      title: `${infoGanador.usuario.nombre}, Ganaste`,
      text: 'congratulations.',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }


}


