import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GpClassificationService {

  constructor(private http:HttpClient) { }

  classificationList(){
    const url = "/api/results/standings?seasonUuid=ae6c6f0d-c652-44f8-94aa-420fc5b3dab4&categoryUuid=e8c110ad-64aa-4e8e-8a86-f2f152f6a942";
    return this.http.get(url);
  }
}
