import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { ContactoComponent } from "./contacto/contacto.component";
import { RouterModule } from '@angular/router';
import { InicioComponent } from "./inicio/inicio.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, BodyComponent, ContactoComponent, RouterModule, InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pasteleria-angular';
}
