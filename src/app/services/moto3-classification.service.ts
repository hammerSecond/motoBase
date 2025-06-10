import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Moto3ClassificationService {

  constructor(private http:HttpClient) { }

  classificationList(){
    const url = "api/results/standings?seasonUuid=ae6c6f0d-c652-44f8-94aa-420fc5b3dab4&categoryUuid=954f7e65-2ef2-4423-b949-4961cc603e45";
    return this.http.get(url);
  }
}
