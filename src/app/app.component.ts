import { Component, inject, Signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DriversService } from './drivers.service';
import { Driver } from './driver.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'motoDataBase';

  
  constructor(private driversService:DriversService){}
  ngOnInit(){
    this.driversService.driverList().sub
  }
}
