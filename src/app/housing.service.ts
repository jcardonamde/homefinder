import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  constructor() { }

  // La anterior lista cambio por una data creada en una db json para usarse como svr web local
  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }

  // Lista usada anteriormente para inyectar data desde el servicio
  // housingLocationList: HousingLocation[] = [
  //   {
  //     id: 0,
  //     name: 'Acme Fresh Start Housing',
  //     city: 'Chicago',
  //     state: 'IL',
  //     photo: 'assets/example-house1.jpg',
  //     availableUnits: 4,
  //     wifi: true,
  //     laundry: true
  //   },
  //   {
  //     id: 1,
  //     name: 'A113 Transitional Housing',
  //     city: 'Santa Monica',
  //     state: 'CA',
  //     photo: 'assets/example-house2.jpg',
  //     availableUnits: 0,
  //     wifi: false,
  //     laundry: true
  //   },
  //   {
  //     id: 2,
  //     name: 'Warm Beds Housing Support',
  //     city: 'Juneau',
  //     state: 'AK',
  //     photo: 'assets/example-house3.jpg',
  //     availableUnits: 1,
  //     wifi: false,
  //     laundry: false
  //   },
  //   {
  //     id: 3,
  //     name: 'Homesteady Housing',
  //     city: 'Chicago',
  //     state: 'IL',
  //     photo: 'assets/example-house4.jpg',
  //     availableUnits: 1,
  //     wifi: true,
  //     laundry: false
  //   },
  //   {
  //     id: 4,
  //     name: 'Happy Homes Group',
  //     city: 'Gary',
  //     state: 'IN',
  //     photo: 'assets/example-house5.jpg',
  //     availableUnits: 1,
  //     wifi: true,
  //     laundry: false
  //   },
  //   {
  //     id: 5,
  //     name: 'Hopeful Apartment Group',
  //     city: 'Oakland',
  //     state: 'CA',
  //     photo: 'assets/example-house6.jpg',
  //     availableUnits: 2,
  //     wifi: true,
  //     laundry: true
  //   },
  //   {
  //     id: 6,
  //     name: 'Seriously Safe Towns',
  //     city: 'Oakland',
  //     state: 'CA',
  //     photo: 'assets/example-house7.jpg',
  //     availableUnits: 5,
  //     wifi: true,
  //     laundry: true
  //   },
  //   {
  //     id: 7,
  //     name: 'Hopeful Housing Solutions',
  //     city: 'Oakland',
  //     state: 'CA',
  //     photo: 'assets/example-house8.jpg',
  //     availableUnits: 2,
  //     wifi: true,
  //     laundry: true
  //   },
  //   {
  //     id: 8,
  //     name: 'Seriously Safe Towns',
  //     city: 'Oakland',
  //     state: 'CA',
  //     photo: 'assets/example-house9.jpg',
  //     availableUnits: 10,
  //     wifi: false,
  //     laundry: false
  //   },
  //   {
  //     id: 9,
  //     name: 'Capital Safe Towns',
  //     city: 'Portland',
  //     state: 'OR',
  //     photo: '/assets/example-house10.jpg',
  //     availableUnits: 6,
  //     wifi: true,
  //     laundry: true
  //   }
  // ];

  // getAllHousingLocations(): HousingLocation[] {
  //   return this.housingLocationList;
  // }

  // getHousingLocationById(id: number): HousingLocation | undefined {
  //   return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  // }
}
