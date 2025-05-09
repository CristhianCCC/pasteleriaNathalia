import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { InicioComponent } from "../inicio/inicio.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CardComponent, InicioComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
