import { Component, OnInit} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { GoogleMapsModule } from  '@angular/google-maps'; 
import { Testimonio } from '../Testimonio';
import { Testimonios } from '../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MatIconModule, GoogleMapsModule, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})

/*para que se carguen los testimonios del testimonios.ts*/
export class InicioComponent implements OnInit{

  
  texto = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt delectus, culpa quos voluptatum veritatis atque corporis. Magnam repellendus, eligendi ut consequatur doloribus illum illo, accusamus expedita distinctio similique a vero.';



  center: google.maps.LatLngLiteral = { lat: 40.73061, lng: -73.935242 };
  zoom = 12;
  markers = [
  { lat: 40.73061, lng: -73.935242 },
  { lat: 40.74988, lng: -73.968285 }
  ];

/*para cargar los testimonios*/
ngOnInit(): void { this.obtenerTestimonios(); }

/*Creando la variable de testimonio y asignandole el type de Testimonios*/
testimonio: Testimonios[] = [];

obtenerTestimonios(): void {
  /*Asignandole el array de objetos creado en Testimonio*/
  this.testimonio = Testimonio;
}
}


