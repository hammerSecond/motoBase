import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Moto2ClassificationService {

  constructor(private http:HttpClient) { }


  classificationList(){
    const url = "https://api.motogp.pulselive.com/motogp/v1/results/standings?seasonUuid=ae6c6f0d-c652-44f8-94aa-420fc5b3dab4&categoryUuid=549640b8-fd9c-4245-acfd-60e4bc38b25c";
    return this.http.get(url);
  }
}
