import { Injectable, resource, ResourceRef } from '@angular/core';
import { Driver } from './driver.model';

@Injectable({
  providedIn: 'root',
})
export class DriversService {
  public getDrivers: ResourceRef<Driver[]>;

  constructor() {
    this.getDrivers = resource({
      loader: (): Promise<Driver[]> => {
        return fetch(
          'https://api.motogp.pulselive.com/motogp/v1/results/standings?seasonUuid=ae6c6f0d-c652-44f8-94aa-420fc5b3dab4&categoryUuid=e8c110ad-64aa-4e8e-8a86-f2f152f6a942'
        ).then(async (response) => {
          const driversResponse = await response.json();
          return driversResponse.drivers;
        });
      },
    });
  }
}
