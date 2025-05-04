import { Component} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})


export class InicioComponent{
  
  texto = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt delectus, culpa quos voluptatum veritatis atque corporis. Magnam repellendus, eligendi ut consequatur doloribus illum illo, accusamus expedita distinctio similique a vero.';



}


