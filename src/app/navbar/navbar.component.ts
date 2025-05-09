import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-navbar',
  standalone: true,
  /*necesario para disponer de la propiedad de enrutamientos definida en app.routes*/
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})



export class NavbarComponent {

}
