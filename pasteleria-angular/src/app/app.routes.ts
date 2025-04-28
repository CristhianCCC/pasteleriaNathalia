import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';


/*definiendo las rutas*/
export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'body', component: BodyComponent},
    {path: 'contacto', component: ContactoComponent}
];