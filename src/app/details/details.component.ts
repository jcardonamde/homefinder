import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
  <article>
    <!-- El operador de encadenamiento opcional ? asegura de que si el valor es nulo o indefinido la app no falla -->
    <img class="listing-photo" [src]="housingLocation?.photo"
      alt="Exterior photo of {{housingLocation?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{housingLocation?.name}}</h2>
      <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <ul>
        <li>Units available: {{housingLocation?.availableUnits}}</li>
        <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
        <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
      </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Apply now to live here</h2>
      <!-- Aquí se aplica un controlador de eventos -->
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName">

        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName">

        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email">
        <button type="submit" class="primary">Apply now</button>
      </form>
    </section>
  </article>`,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  // Toma la ruta activa del detalle al que se accede
  route: ActivatedRoute = inject(ActivatedRoute);
  // Se inyecta el parámetro de ruta
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  // Inicializa el Id con este valor
  // housingLocationId = -1;

  // Creo un Objeto de Formulario
  // El FormControl puede proporcionar un valor predeterminado y dar forma a los datos del formulario
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  // Al acceder al componente elegido el Id es convertido a numero y reasignado con base a la ruta elegida
  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    // Se pasa el parámetro de ruta como argumento a la función de servicio
    this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation;
    });
  }

  // Este código usa el operador ?? nulo para establecer
  // de manera predeterminada una cadena vacía si el valor es null
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
