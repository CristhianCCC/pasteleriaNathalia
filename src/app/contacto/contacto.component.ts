import { style } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, RequiredValidator} from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})

export class ContactoComponent {

  imagen1 = "assets/img/reposteria-contacto.jpg";
  imagen2 = "assets/img/reposteria-contacto2.webp"

  /*Definiendo el formulario que va a agrupar acada uno de los campos*/
  usuarioForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required),
    taller: new FormControl('', Validators.required),
    correo: new FormControl('', [Validators.required, Validators.email]),
  })

  guardar(){
    console.log(this.usuarioForm.value);
  }
}
