import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';



export const appConfig: ApplicationConfig = {
    
  providers: 
  [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    /*provider router para el manejo de rutas que se estarn haciendo por medio del navbarcomponentts y navbarcomponenthtml*/
    provideRouter(routes),
    /*Provide httpClient para el uso de la api con la conexion al backend*/
    provideHttpClient(),
  ]
};
