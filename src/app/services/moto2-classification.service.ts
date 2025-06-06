import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Moto2ClassificationService {

  constructor(private http:HttpClient) { }

  classificationList(){
    const url = "https://api.motogp.pulselive.com/motogp/v1/results/standings?seasonUuid=549640b8-fd9c-4245-acfd-60e4bc38b25c&categoryUuid=e8c110ad-64aa-4e8e-8a86-f2f152f6a942";
    return this.http.get(url);
  }
}
