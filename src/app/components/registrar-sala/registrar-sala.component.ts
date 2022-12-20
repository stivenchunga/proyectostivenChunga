import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registrar-sala',
  templateUrl: './registrar-sala.component.html',
  styleUrls: ['./registrar-sala.component.scss']
})
export class RegistrarSalaComponent implements OnInit {

  formularioSala:FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  construirFormulario() {
    this.formularioSala = this.formBuilder.group({
      
    })
  }

}
